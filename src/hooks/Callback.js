import React, {useCallback, useState} from "react";

const MemoizedComponent = React.memo(({name, onChange}) => {
    console.log('Rendering MemoizedComponent: ' + name);
    return <input type="text" name={name} onChange={onChange}/>;
});

const CallbackApp = () => {
    const [data, setData] = useState({});

    // At each render of UnoptimizedApp, a new changeHandler is created,
    // making the memoization of MemoizedComponent useless.
    const unoptimizedChangeHandler = (e) => {
        const {name, value} = e.target;
        setData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // To optimize, use useCallback
    const optimizedChangeHandler = useCallback((e) => {
        const {name, value} = e.target;
        setData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }, []);

    return (
        <>
            <p>{JSON.stringify(data)}</p>
            <MemoizedComponent name="unoptimized" onChange={unoptimizedChangeHandler}/>
            <MemoizedComponent name="optimized" onChange={optimizedChangeHandler}/>
        </>
    );
}

export {CallbackApp};