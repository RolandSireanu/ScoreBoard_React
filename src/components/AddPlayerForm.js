import React, {Component} from "react";

class AddPlayerForm extends Component {


    playerInput = React.createRef();

    handleValueChange = (e) => {

        this.setState({
            value: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addPlayer(this.playerInput.current.value);
        this.setState({value: ""});

    }

    render() {
        
        return (
            <form onSubmit={this.handleSubmit} >
                <input type="text" 
                       ref={this.playerInput}
                       placeholder="Enter name"
                />
                <input type="submit" value="Add player" />
            </form>
        );
    }

}

export default AddPlayerForm;