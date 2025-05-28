import React from "react";

class UncontrolledComponent extends React.Component {

    state = {
        username: '',
        isValid: false,
    }

    constructor(props) {
        super(props);
    }

    changeUsername = (e) => {
        const {value} = e.target;
        this.setState({
            username: value,
            isValid: value.length > 3,
        });
    }

    submitForm = (e) => {
        e.preventDefault();
        console.log("submitted by " + this.state.username);
    };

    render() {
        return (
            <form method="post" onSubmit={this.submitForm}>
                <p>Username: {this.state.username}</p>
                <p>
                    <input type="text" name="username" onChange={this.changeUsername}/>
                    <input type="submit" disabled={!this.state.isValid}/>
                </p>
            </form>
        );
    }
}

class ControlledComponent extends React.Component {

    state = {
        username: '',
        isValid: false,
    }

    constructor(props) {
        super(props);
    }

    changeUsername = (e) => {
        const {value} = e.target;
        this.setState({
            username: value,
            isValid: value.length > 3,
        });
    }

    submitForm = (e) => {
        e.preventDefault();
        console.log("submitted by " + this.state.username);
    };

    render() {
        return (
            <form method="post" onSubmit={this.submitForm}>
                <p>Username: {this.state.username}</p>
                <p>
                    <input type="text" name="username" onChange={this.changeUsername} value={this.state.username}/>
                    <input type="submit" disabled={!this.state.isValid}/>
                </p>
            </form>
        );
    }
}

export {UncontrolledComponent, ControlledComponent};