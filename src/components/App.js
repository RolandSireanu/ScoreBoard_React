import React, {Component} from 'react';
import Header from "./Header.js";
import AddPlayerForm from "./AddPlayerForm"
import PlayerList from "./PlayerList"


class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        score: 0,
        id: 1,
        king: true
      },
      {
        name: "Treasure",
        score: 0,
        id: 2,
        king: false
      },
      {
        name: "Ashley",
        score: 0,
        id: 3,
        king: false
      },
      {
        name: "James",
        score: 0,
        id: 4,
        king: false
      }
    ]
  };

  handleScoreChange = (index,delta) => {
    this.setState( prevState => ({
      score: prevState.players[index].score += delta
    }));

    console.log("index :" + index, "delta : " +delta);
  }


  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  //player id counter 
  prevPlayerID = 4;

  handleAddPlayer = (name) => {

    console.log(...this.state.players);

    this.setState({
      players: [
        ...this.state.players,
        {
          name: name,
          score: 0,
          id: this.prevPlayerID += 1
        }
      ]
    });
  }


  GetIdOfHighScore = () => {

    let p = this.state.players;
    let maxScoreId = null;
    let maxScoreSoFar = -1000;

    for(let i=0; i<p.length; i++){
      if(p[i].score > maxScoreSoFar){
        maxScoreId = p[i].id;
        maxScoreSoFar = p[i].score;
      }
    }

    return maxScoreId;
  }

  render() {

    let kingId = this.GetIdOfHighScore();
    console.log("Kingid = "+kingId);
    console.log("Change score "+this.handleScoreChange);
    console.log(this);

    return (
        <div className="scoreboard">
          <Header  
            players={this.state.players}
          />
    
          {/* Players list */}          
          <PlayerList players={this.state.players} kingId={kingId} changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}
          />
          {/* {this.state.players.map( (player,index) =>
            <Player 
              name={player.name}
              score={player.score}
              id={player.id}
              key={player.id.toString()} 
              index={index}
              changeScore={this.handleScoreChange}
              removePlayer={this.handleRemovePlayer}  
              king={player.id === kingId ? true:false}         
            />
          )} */}
          <AddPlayerForm addPlayer={this.handleAddPlayer}/>
        </div>
    );
  }
}

export default App;
