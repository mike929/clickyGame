import React, { Component } from "react";
import GameCard from "./components/GameCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import heros from "./gamecards.json";

class App extends Component {
  // Setting this.state.heros to the heros json array
  state = {
    heros
  };

  removeheros = id => {
    // Filter this.state.heros for heros with an id not equal to the id being removed
    const heros = this.state.heros.filter(heros => heros.id !== id);
    // Set this.state.heros equal to the new heros array
    this.setState({ heros });
  };

  // Map over this.state.heros and render a herosCard component for each heros object
  render() {
    return (
      <Wrapper>
        <Title>Super Heros</Title>
        {this.state.heros.map(heros => (
          <GameCard
            removeheros={this.removeheros}
            id={heros.id}
            key={heros.id}
            name={heros.name}
            image={heros.image}
            // occupation={heros.occupation}
            // location={heros.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;

