import React from "react";

const italic = (string) => {
    return <em>{string}</em>
}

const bold = (string) => <strong>{string}</strong>

const Formatter = (props) => {
    return props.children({bold, italic});
};

class FaaC extends React.Component {
    render() {
        const childFunction = ({bold : b, italic: i}) => <p>Child will use {i('util functions')} from {b('Formatter')}</p>
        return <Formatter>{childFunction}</Formatter>
    }
}

//see usage in index
class AuthorsFaaC extends React.Component {
    state = {
        list: ['Fyodor Dostoevsky', 'Mikhail Bulgakov', 'Aldous Huxley'],
    }

    render() {
        return this.props.children(this.state.list);
    }
}
export {FaaC, AuthorsFaaC};
