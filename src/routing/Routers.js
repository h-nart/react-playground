import {BrowserRouter, Route, Routes} from "react-router-dom";

const Example = () => <div>Example Route</div>;

const RouterApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/example" element={<Example/>}/>
                <Route path="/example/example" element={<Example/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export {RouterApp};