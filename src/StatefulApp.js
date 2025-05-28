import React from "react";

class StatefulApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: this.props.counter
        }
        this.multipleUpdates = this.multipleUpdates.bind(this);
    }

    updaterFunction = () => {
        this.setState((state) => {
            return {counter: state.counter + 1};
        });
        this.setState((state) => {
            return {counter: state.counter + 1};
        });
    }

    // multipleUpdates = () => {
    //     //Those get batched by React
    //     this.setState({counter: this.state.counter + 1});
    //     this.setState({counter: this.state.counter + 1});
    // }

    // an arrow function autobinds 'this' to it when called. Whereas with a class function, you need to
    // bind it to 'this' in the constructor
    multipleUpdates() {
        //Those get batched by React
        this.setState({counter: this.state.counter + 1});
        this.setState({counter: this.state.counter + 1});
    }

    // multiPostIncrement = () => {
    //     // this.setState({counter: this.state.counter++});
    //     this.state.counter++;
    //     this.state.counter++;
    //     // this.setState({counter: this.state.counter++});
    // }

    render() {
        return (
            <div>
                <div>&lt;-------- Statefull App --------></div>
                <button onClick={() => this.setState({counter: this.state.counter+1})}>counter++</button>
                <button onClick={this.updaterFunction}>updater</button>
                <button onClick={this.multipleUpdates}>multi updates</button>
                <div>counter: {this.state.counter}</div>
            </div>
        );
    }
}

export default StatefulApp;