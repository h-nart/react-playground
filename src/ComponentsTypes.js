import React from "react";

class Component extends React.Component {
    render() {
        return (
            <p>Class Component Time: {new Date().toISOString()}</p>
            // <p>Pure Class Component: {this.props.test.n}</p>
            // <p>Class Component: {this.props.test()}</p>
        );
    }
}

class PureComponent extends React.PureComponent {
    render() {
        return (
            <p>Pure Class Component Time: {new Date().toISOString()}</p>
            // <p>Pure Class Component: {this.props.test()}</p>
        );
    }
}

let FunctionalComponent = () => {
    return <p>Functional Component: {new Date().toISOString()}</p>
}

let MemoizedFunctionalComponent = React.memo(() => {
    return <p>Memoized Functional Component: {new Date().toISOString()}</p>
});

class ComponentsTypes extends React.Component {
    // Class Property State
    state = {
        lastUpdate: new Date().toISOString()
    };

    componentDidMount() {
        this.intervalId = setInterval(() => this.setState({lastUpdate: new Date().toISOString()}),
            2000);
    }
    componentWillUnmount() {
        clearInterval(this.intervalId)
    }

    logger() {
        console.log('N.H');
    }

    pureLogger() {
        console.log('Pure N.H');
    }

    render() {
        return (
            // <React.Fragment>
            <>
                <p>Last Update: {this.state.lastUpdate}</p>
                {/*<Component test={() => console.log('Nart')}/>*/}
                {/*<PureComponent test={() => console.log('Pure Nart')}/>*/}
                {/*<Component test={this.logger}/>*/}
                {/*<PureComponent test={this.pureLogger}/>*/}
                {/*<Component test={{n: 'nn'}}/>*/}
                <Component/>
                <PureComponent/>
                <FunctionalComponent/>
                <MemoizedFunctionalComponent/>
            </>
            // </React.Fragment>
        )
    }
}

export default ComponentsTypes;