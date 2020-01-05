import React, { Component } from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";

// const Details = props => {
//   return (
//     <pre>
//       <code>{JSON.stringify(props, null, 4)}</code>
//     </pre>
//   );
// };

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  componentDidMount() {
    pet.animal(this.props.id).then(({ animal }) => {
      this.setState({
        xname: animal.name,
        xanimal: animal.type,
        location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
        description: animal.description,
        media: animal.photos,
        xbreed: animal.breeds.primary,
        loading: false
      });
    }, console.error);
  }
  render() {
    if (this.state.loading) {
      return <h1>Loading ....</h1>;
    }

    const {
      xname,
      xbreeds,
      xanimal,
      description,
      media,
      location
    } = this.state;
    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{xname}</h1>
          <h2>{`${xanimal} - ${xbreeds} - ${location}`}</h2>
          <button>Adopt {xname}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default Details;
