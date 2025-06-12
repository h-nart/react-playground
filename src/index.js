import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import ComponentsTypes from "./ComponentsTypes";
import StatefulApp from "./StatefulApp";
import LifeCyclesParent from "./LifeCycles";
import {UncontrolledComponent, ControlledComponent} from "./UncontrolledComponent";
import List from "./Lists";
import {Conditionals, ClassNameTest, StyledComponent} from "./Styling";
import {CsvLayout, CsvNovels, FormattedContent} from './HOCs'
import {AuthorsFaaC, FaaC} from "./FaaC";
import {ContextApiApp, LanguageApp} from "./ContextApi";
import {CallbackRef, CreateRef, ForwardRef} from "./Refs";
import ErroneousApp from "./ErrorBoundaries";
import {GifPortalApp, PortalContainer, ModalPortalApp} from "./Portals";
import portal from "./portal.gif";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
        <React.StrictMode>
            <App>
                <PortalContainer/>
                <GifPortalApp gifPath={portal}/>
                <ComponentsTypes/>
                <StatefulApp counter={0}/>
                {/*Strict mode will mount => unmount => remount components for testing. This only affects development environments.*/}
                {/*<LifeCyclesParent/>*/}
            </App>
        </React.StrictMode>
        <LifeCyclesParent/>
        <UncontrolledComponent/>
        <ControlledComponent/>
        <List/>
        <Conditionals/>
        <ClassNameTest/>
        <StyledComponent color="blue"/>
        <FormattedContent prop1="v1" prop2="v2"/>
        <CsvNovels separator={" | "}/>
        <FaaC/>
        <AuthorsFaaC>{(data) => <CsvLayout data={data}/>}</AuthorsFaaC>
        <ContextApiApp/>
        <LanguageApp/>
        <CallbackRef/>
        <CreateRef/>
        <ForwardRef/>
        <ErroneousApp/>
        <ModalPortalApp/>
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
