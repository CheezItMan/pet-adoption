// index.js

const Pet = (props) => {
    return React.createElement('div', {}, [
        React.createElement('h1', {}, props.petName), 
        React.createElement('h2', {}, props.petType),
        React.createElement('h2', {}, props.petBreed)
    ]);
}

const App = () => {
    return React.createElement("div", {}, [
            React.createElement('h1', {}, 'Adopt Me!'),
            React.createElement(Pet, {
                petName: 'Lucky',
                petType: 'Dog',
                petBreed: 'Mini-Pincher'
            }),
            React.createElement(Pet, {
                petName: 'Nicky',
                petType: 'Dog',
                petBreed: 'Mini-Pincher'
            }),
            React.createElement(Pet, {
                petName: 'Shadow',
                petType: 'Cat',
                petBreed: 'Maine Coon'
            })
        ]
        );
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));