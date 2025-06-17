import {useEffect, useRef, useState} from "react";

// Two uses for useRef: 1. ref to an element 2. ref to variable
const RefApp = () => {
    const [value, setValue] = useState('0');

    const inputRef = useRef();
    const renderCount = useRef(0);
    renderCount.current += 1;

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <>
            <div>Render count: {renderCount.current}</div>
            <input ref={inputRef}/>
            <button onClick={() => setValue(inputRef.current.value)}>Update State</button>
        </>
    );
};

export {RefApp};