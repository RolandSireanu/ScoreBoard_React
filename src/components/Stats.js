import React from "react";

const Stats = (props) => {

    const totalNrPlayers = props.players.length;
    const totalNrOfPoints = props.players.reduce((totalScore,player) => {
        return totalScore+player.score;
    }, 0);

    return (
        <table className="stats">
        <tbody>
            <tr>
                <td>Players:</td>
                <td>{totalNrPlayers}</td>
            </tr>
            <tr>
                <td>Total Points:</td>
                <td>{totalNrOfPoints}</td>
            </tr>
        </tbody>
        </table>
            );
}


export default Stats;