import React from "react";
import ReactDOM from "react-dom";

const Portal = () => {
    return ReactDOM.createPortal(
        <div>Portal Magic!</div>,
        document.getElementById("portal")
    );
}

const PortalContainer = () => (
    <div>
        <div>Here goes the portal container.</div>
        <Portal/>
    </div>
)


/** Gif Portal **/
const GifPortal = ({gifPath}) => {
    return ReactDOM.createPortal(
        <img src={gifPath} width="200" height="auto" alt="oh no!"/>,
        document.getElementById("portal")
    );
}

const GifPortalApp = ({gifPath}) => <GifPortal gifPath={gifPath}/>;

/****** Modal ******/
const ModalPortal = (props) => {
    return ReactDOM.createPortal(
        <div style={{
            width: '100vw',
            height: '100vh',
            left: 0,
            top: 0,
            position: 'fixed',
            background: 'rgba(0, 0, 0, 0.7)',
        }}>
            <div style={{
                background: 'turquoise',
                margin: 16,
                padding: 16,
                color: 'white',
            }}>{props.children}</div>
        </div>,
        document.getElementById("portal")
    );
}

class ModalPortalApp extends React.Component {
    state = {
        isOpen: false,
    };

    render() {
        return (
            <div className="portal-app">
                <button onClick={() => this.setState({isOpen: true})}>Open Modal</button>
                {this.state.isOpen && (
                    <ModalPortal>
                        <h2>I am an open portal!</h2>
                        <button onClick={() => this.setState({isOpen: false})}>Close Me!</button>
                    </ModalPortal>
                )}
            </div>
        );
    }
}

export {PortalContainer, GifPortalApp, ModalPortalApp};