import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import GameCard from "./components/GameCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import heros from "./gamecards.json";


// shuffle function from stackoverflow - https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends Component {
  // Setting this.state.heros to the heros json array
  state = {
    message: "Click an image to begin!",
    score: 0,
    highScore: 0,
    heros,
    selectedHeros: []
  };

  

  selectedImage = id => {
    // set state of the array to a variable to be updated
    let selectedHeros = this.state.selectedHeros;
    let score = this.state.score;
    let highScore = this.state.highScore;
    // Set this.state.heros equal to the new heros array
      // if the clicked image has an id of the indexed heros
      if (selectedHeros.indexOf(id) === -1) {
        // push that id into that id into the array to be stored
        selectedHeros.push(id);
        console.log(selectedHeros);
        // run the score function
        this.handleIncrement();
        // run the reshuffle function after each click
        this.makeShuffle();
      } else if (this.state.score === 12) {
        alert("You WIN!!")
        this.setState({
          score: 0,
          selectedHeros: []
        });
      } else {
        this.setState({
          score: 0,
          selectedHeros: []
        });
        console.log("selected TWICE")
        alert("Sorry you LOSE!! You clicked an image twice!!")
      }
  
      if (score > highScore) {
        this.setState({
          highScore: score
        })
      } 
    }
  
    // handleIncrement increases this.state.score by 1
    handleIncrement = () => {
      // setState updates a components states
      this.setState({ score: this.state.score + 1 });
    };
  
    // shuffle up images
    makeShuffle = () => {
      this.setState({ heros: shuffle(heros) })
    }
  


  // Map over this.state.heros and render a herosCard component for each heros object
  render() {
    return (
      <div>
        <Navbar
          score={this.state.score}
          highScore={this.state.highScore}
          />
      <Wrapper>
        {/* <Title>Super Heros</Title> */}
        {this.state.heros.map(heros => (
          <GameCard
            removeheros={this.removeheros}
            id={heros.id}
            key={heros.id}
            name={heros.name}
            image={heros.image}
            selectedImage={this.selectedImage}

          />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;

