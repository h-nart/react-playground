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

const UsernameField = React.forwardRef((props, ref) => (
   <div>
       <input ref={ref} {...props}/>
   </div>
));

class UsernameFieldClassComponent extends React.Component {
    render() {
        return (
            <div>
                <input ref={this.props.ref} {...this.props}/>
            </div>
        )
    }
}

// forwardRef
class ForwardRef extends React.Component {
    usernameEl = React.createRef();
    usernameClassComponent = React.createRef();

    componentDidMount() {
        // notice how ForwardRef now has access to UsernameField because of forwardRef
        console.log(this.usernameEl)
        console.log(this.usernameClassComponent)
    }

    render() {
        return (
            <div>
                <UsernameField ref={this.usernameEl}/>
                <UsernameFieldClassComponent ref={this.usernameClassComponent}/>
            </div>
        );
    }
}

export {CallbackRef, CreateRef, ForwardRef};