import React, {Component} from "react"

class Stopwatch extends Component {

    state = {
        isRunning: false,
        elapsedTime : 0,
        prevTime:0
    }


    handleStartStopWatch = () => {
        this.setState((prevState) => ({
            isRunning: !prevState.isRunning
        }));

        if(!this.state.isRunning){
            console.log("Start watch ...");
            this.setState({
                prevTime: Date.now()
            })
        }
    }

    handleResetWatch = () => {
        this.setState({
            elapsedTime:0
        })
    }

    tick = () => {
        if(this.state.isRunning){
            const now = Date.now();
            this.setState((prevState)=>({
                prevTime:now,
                elapsedTime:  prevState.elapsedTime + (now - prevState.prevTime)
            }))
        }        
    }

    componentDidMount = () => {
        this.intervalID = setInterval(()=>{this.tick()} , 250);
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    render(){

        return (
            <div className="stopwatch">
                <h2> Stopwatch</h2>
                <span className="stopwatch-time"> {Math.floor(this.state.elapsedTime / 1000)} </span>      
                <button onClick={this.handleStartStopWatch} >{this.state.isRunning ? "stop":"start"}</button>      
                <button onClick={this.handleResetWatch}>Reset</button>
            </div>
        );
    }



}export default Stopwatch;