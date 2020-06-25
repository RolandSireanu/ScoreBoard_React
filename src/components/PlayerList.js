import React from "react"
import Player from "./Player"

const PlayerList = (props) => {
        console.log("===== ");
        console.log(props);
        return (
            <React.Fragment>
            {props.players.map( (player,index) =>
                <Player 
                name={player.name}
                score={player.score}
                id={player.id}
                key={player.id.toString()} 
                index={index}
                changeScore={props.changeScore}
                removePlayer={props.removePlayer}  
                king={player.id === props.kingId ? true:false}         
                />
          )}
          </React.Fragment>

        );

    }

    export default PlayerList;