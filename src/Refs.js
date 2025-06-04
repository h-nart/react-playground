import React from "react";

//Deprecated
// class StringRef extends React.Component {
//
//     componentDidMount() {
//         this.refs.username.focus();
//     }
//
//     render() {
//         return (
//             <input type="text" ref="username" name="username"/>
//         );
//     }
// }

class CallbackRef extends React.Component {
    usernameEl = null;

    componentDidMount() {
        this.usernameEl.focus();
    }

    render() {
        return <input type="text" name="username" ref={usernameEl=> {this.usernameEl = usernameEl}}/>
    }
}

class CreateRef extends React.Component {
    usernameEl = React.createRef();

    componentDidMount() {
        this.usernameEl.current.focus();
    }

    render() {
        return <input type="text" name="username2" ref={this.usernameEl}/>
    }
}

export {CallbackRef, CreateRef};