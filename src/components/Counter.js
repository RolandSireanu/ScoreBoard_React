import React from "react";
import PropTypes from "prop-types";

const Counter = (props) => {

  //Object destructuring !!!
  console.log("Props in Counter" + props.changeScore);
  const {score,changeScore} = props;

  let index = props.index;

  return (
    <div className="counter">
      <button className="counter-action decrement" onClick={()=>changeScore(index,-1)}> - </button>
      <span className="counter-score">{ score }</span>
      <button className="counter-action increment" onClick={()=>changeScore(index,+1)}> + </button>
    </div>
  );

}
    
Counter.prototype = {
  score: PropTypes.number,
  changeScore: PropTypes.func
};

  export default Counter;