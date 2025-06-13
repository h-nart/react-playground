import React from "react";
import PropTypes from "prop-types";

class User extends React.Component {

    // If those types/conditions aren't met, React will throw a warning in the console
    // this only applies to developer mode. In production, PropTypes are stripped out.
    static propTypes = {
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        creationDate: PropTypes.instanceOf(Date),
    }

    static defaultProps = {
        name: 'John Doe',
    }

    render() {
        const {name, creationDate, age} = this.props;
        return (
            <>
                <div>Name: {name}</div>
                <div>Age: {age}</div>
                <div>creationDate: {creationDate}</div>
            </>
        )
    }
}

/**Functional Components:**/
const Greeting = (props) => (<div>Greeting: {props.greeting}</div>);
// function Greeting(props) {
//     return <div>Greeting: {props.greeting}</div>;
// }

Greeting.propTypes = {
    greeting: PropTypes.string.isRequired,
}

//This is not working. Apparently on React 18+, it is not guaranteed to work on functional components
Greeting.defaultProps = {
    greeting: 'Hola!',
}

export {User, Greeting};
