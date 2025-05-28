import React from "react";

const log = (component, method) => console.log(`[${component}]: ${method}`)

export default class LifeCyclesParent extends React.Component {

    state = {};

    constructor(props) {
        super(props);
        log('parent', 'constructor')
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        log('parent', 'getDerivedStateFromProps' );
        console.log(nextProps, prevState);
        return null;
        // return {component: 'ParentLifeCycles'};
    }

    componentDidMount() {
        log('parent', 'componentDidMount');
        this.setState({component: 'ParentLifeCycles'});
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        log('parent', 'shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        log('parent', 'getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        log('parent', 'componentDidUpdate');
    }

    componentWillUnmount() {
        log('parent', 'componentWillUnmount');
    }

    render() {
        log('parent', 'render');
        return <LifeCyclesChild parentComponent={this.state.component}/>
    }
}

class LifeCyclesChild extends React.Component{

    state = {};

    constructor(props) {
        super(props);
        log('child', 'constructor')
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        log('child', 'getDerivedStateFromProps' );
        console.log(nextProps, prevState);
        return null;
        // return {component: 'child'};
    }

    componentDidMount() {
        log('child', 'componentDidMount');
        this.setState({component: 'child'});
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        log('child', 'shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        log('child', 'getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        log('child', 'componentDidUpdate');
    }

    componentWillUnmount() {
        log('child', 'componentWillUnmount');
    }

    render() {
        log('child', 'render');
        return <div>{this.props.parentComponent}</div>
    }
}