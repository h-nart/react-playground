import React, {Suspense} from "react";

const LazyImport = React.lazy(() => import('./LazyLoaded'));

class DynamicImportsApp extends React.Component {
    state = {
        show: false,
    }
//
    render() {
        return (
            <>
                <button onClick={() => this.setState({show: !this.state.show})}>Lazy Import!</button>
                {this.state.show &&
                    (<Suspense fallback={<div>Lazy Loading...</div>}>
                            <LazyImport/>
                            <p>Another child won't render until lazy loaded components are loaded</p>
                        </Suspense>
                    )
                }
            </>
    );
    }
}

export default DynamicImportsApp;
