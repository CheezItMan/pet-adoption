import React from "react";
import Loadable from "react-loadable";
import pf from "petfinder-client";
import { navigate } from "@reach/router/lib/history";
import Modal from "./modal";

import Carousel from "./carousel";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

const loading = () => <h1>Loading Content</h1>;

const LoadableContent = Loadable({
  loader: () => import("./adoptmodalcontent"),
  loading
});

class Details extends React.Component {
  state = {
    loading: true,
    showModal: false
  };

  toggleModal = () => this.setState({ showModal: !this.state.showModal });

  componentDidMount() {
    petfinder.pet
      .get({
        output: "full",
        id: this.props.id
      })
      .then(data => {
        const pet = data.petfinder.pet;
        let breed;

        if (Array.isArray(data.petfinder.pet.breeds.breed)) {
          breed = data.petfinder.pet.breeds.breed.join(", ");
        } else {
          breed = data.petfinder.pet.breeds.breed;
        }

        this.setState({
          name: pet.name,
          animal: pet.animal,
          location: `${pet.contact.city}, ${pet.contact.state}`,
          description: pet.description,
          media: pet.media,
          loading: false,
          breed
        });
      })
      .catch(err => {
        navigate("/");
      });
  }
  render() {
    const {
      animal,
      breed,
      location,
      description,
      media,
      loading,
      name,
      showModal
    } = this.state;

    if (loading) {
      return (
        <div>
          <h1>Loading</h1>
        </div>
      );
    } else {
      return (
        <div className="details">
          <Carousel media={media} />
          <div>
            <h1>{name}</h1>
            <h2>
              {animal} - {breed} - {location}
            </h2>
            <button onClick={this.toggleModal}>Adopt {name}</button>
            <p>{description}</p>
            {showModal ? (
              <Modal>
                <LoadableContent toggleModal={this.toggleModal} name={name} />
              </Modal>
            ) : null}
          </div>
        </div>
      );
    }
  }
}

export default Details;
