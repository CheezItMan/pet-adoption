import React from "react";
import { Link } from "@reach/router";

class Pet extends React.Component {
  render() {
    const { id, name, animal, breed, media, location } = this.props;
    console.log("Media");
    console.log(media);
    console.log(this.props);
    console.log(name);

    let photos = [
      {
        value: "https://placekitten.com/100/100"
      }
    ];
    if (media != null) {
      if (media.photos != null) {
        if (media && media.photos && media.photos.photo) {
          photos = media.photos.photo.filter(photo => photo["@size"] === "pn");
        }
      }
    }

    return (
      <Link to={`/details/${id}`} className="pet">
        <div className="image-container">
          <img src={photos[0].value} alt={name} />
        </div>
        <section className="info">
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {location}{" "}
          </h2>
        </section>
      </Link>
    );
  }
}
export default Pet;
