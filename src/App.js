import React, { Component } from "react";
import PlayerCard from "./components/PlayerCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import players from "./players.json";
import "./App.css";

class App extends Component {
  // Setting this.state.players to the players json array
  state = {
    players,
    score: 0,
    highscore: 0
  };

  // clickedPlayer = id => {
  // //search players array
  //   players.find(function(element) {
  //     return element;
  //   });
clickedPlayer = click => {

};


// function to shuffle all the pictures
shuffleImg = id => {
  console.log(id)
  this.setState({
    players:this.shuffle(this.state.players)
   });
  
 };
 
 shuffle = array => {
   let currentIndex = array.length, temporaryValue, randomIndex;
 
   // While there remain elements to shuffle...
   while (0 !== currentIndex) {
 
     // Pick a remaining element...
     randomIndex = Math.floor(Math.random() * currentIndex);
     currentIndex -= 1;
 
     // And swap it with the current element.
     temporaryValue = array[currentIndex];
     array[currentIndex] = array[randomIndex];
     array[randomIndex] = temporaryValue;
   }
 
   return array;
 };

pointCounter = id => {
  this.shuffleImg(id);
  this.onClickCounter() // create counter 
};

onClickCounter = id => {
  
};


  //find match by id
  //if check is click true or (false)
  //set state score and message
  //shuffle players array (write function)
  
  //if clickedPlayer == true // end game and give message
  // next game (function)
    // checks to set new high school
    // reset each player in array to clicked false
    // set state score to 0 and message set    


  // Map over this.state.players and render a PlayerCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Europe Ryder Cup Guessing Game</Title>
        {this.state.players.map(player => (
          <PlayerCard
            shuffleImg = {this.shuffleImg}
            id={player.id}
            key={player.id}
            name={player.name}
            image={player.image}
          />
        ))}
      </Wrapper>
    )
  }
}

export default App;
