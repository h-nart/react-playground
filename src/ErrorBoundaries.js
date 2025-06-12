import React from "react";


class ErrorBoundary extends React.Component {

    state = {
        errorMsg: null,
    }

    static getDerivedStateFromError(error) {
        console.log("getDerivedStateFromError was called");
        return {
            errorMsg: error.message,
        }
    }

    // static getDerivedStateFromProps(nextProps, prevProps) {
    //     console.log("getDerivedStateFromProps was called: " + nextProps.children);
    //     return nextProps.children.props.importantProp? {errorMsg: null} : null;
    // }

    componentDidUpdate(prevProps) {
        console.log("componentDidUpdate is called: " + this.props.children.props.importantProp);
        if (this.state.errorMsg && this.props.children.props.importantProp) {
            this.setState({ errorMsg: null });
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log("componentDidCatch: " + errorInfo.componentStack);
        console.log("componentDidCatch error: " + this.state.errorMsg);
    }

    render() {
        console.log("importantProp in render: " + this.props.children.props.importantProp);
        return this.state.errorMsg? <div>An error has occurred: {this.state.errorMsg}</div> : this.props.children;
    }
}

const ErroneousComponent = ({importantProp}) => {
    if (!importantProp) {
        throw new Error("Woah! I need my importantProp!");
    }
    return <div>My importantProp is: {importantProp}</div>;
}

class ErroneousApp extends React.Component {
    importantProp = "I exist.";

    unsetProp = () => {
        this.importantProp = null;
        this.forceUpdate();
    }

    resetProp = () => {
        this.importantProp = "I exist once more."
        this.forceUpdate();
    }

    render() {
        return (
            <div className="ErroneousApp">
                <button onClick={this.unsetProp}>Do not click!</button>
                <ErrorBoundary>
                    <ErroneousComponent importantProp={this.importantProp}/>
                </ErrorBoundary>
                <button onClick={this.resetProp}>Fix Me!</button>
            </div>
        );
    }
}

export default ErroneousApp;
