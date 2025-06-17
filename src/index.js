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
import DynamicImportsApp from "./DynamicImports";
import {User, Greeting} from "./PropTypes";
import {ContextHookApp, CounterApp, CounterWithHook, GitHubDataApp, UpdateData, UseBackgroundApp} from "./hooks/Hooks";
import {ApiCall, ReducerCounter} from "./hooks/Reducer";
import {CallbackApp} from "./hooks/Callback";
import UseMemoApp from "./hooks/Memo";

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
        <DynamicImportsApp/>
        <User name="Nart" creationDate="test" age={"testt"}/>
        <User creationDate="test" age={"testt"}/>
        <Greeting greeting="Hello!"/>
        <Greeting/>
        <CounterWithHook/>
        <CounterApp/>
        <ContextHookApp/>
        <UseBackgroundApp/>
        <GitHubDataApp username="h-nart"/>
        {/*<GitHubDataApp username="dkastani"/>*/}
        {/*<GitHubDataApp username="sjalowdi"/>*/}
        <UpdateData/>
        <ReducerCounter value={5}/>
        <ApiCall name="Nart"/>
        <CallbackApp/>
        <UseMemoApp/>
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
