import React, {useContext, useEffect, useState} from "react";

const CounterWithHook = () => {
    const [value, setValue] = useState(0);
    // let [value, setValue] = React.useState(0);

    useEffect(() => {
        document.title = `c = ${value}`;

        //optional Cleanup Function
        return () => {
            document.title = 'React App'
        };
    }, [value]);


    return (
        <>
            <p>c= {value}</p>
            <button onClick={() => setValue(value + 1)}>+ 1</button>
            {/* This would change the value but not update the UI since the state wasn't changed. setValue should be used.
        <button onClick={() => value++}>+ 1</button> */}
        </>
    );
}

const CounterApp = () => {
    const [show, setShow] = useState(true);

    return (
        <>
            {show && <CounterWithHook/>}
            <button onClick={() => setShow(!show)}>{show ? 'Unmount' : 'Mount'}</button>
        </>
    );
}

/** useContext **/
const LanguageContext = React.createContext('en');

const LanguageConsumer = () => {
    const language = useContext(LanguageContext);

    return (
        <div>Current Language: {language}</div>
    );
};

const ContextHookApp = () => {
    return (
        <>
            {/*uses default value*/}
            <LanguageConsumer/>
            <LanguageContext.Provider value={'ar'}>
                {/*uses value from Provider*/}
                <LanguageConsumer/>
            </LanguageContext.Provider>
        </>
    );
}

export {CounterWithHook, CounterApp, ContextHookApp};