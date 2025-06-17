import {useEffect, useReducer} from "react";

/** useReducer **/
// useReducer takes reducerFunc, an initial state(, and initFunc.)
// The reducerFunc is used to create a new state from prevState and an action object.
// The reducerFunc is executed when dispatch(action) is called. dispatch is returned by the userReducer.

const initState = {
    count: 0,
};

const reducerFunc = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {count: state.count + 1};
        case 'DECREMENT':
            return {count: state.count - 1};
    }
};

const initFunc = (value) => ({count: value});

const ReducerCounter = (props) => {
    const [state, dispatch] = useReducer(reducerFunc, initState);
    const [state2, dispatch2] = useReducer(reducerFunc, props.value, initFunc);

    return (
        <>
            <div>
                <h3>{state.count}</h3>
                <button onClick={() => dispatch({type: 'INCREMENT'})}>+</button>
                <button onClick={() => dispatch({type: 'DECREMENT'})}>-</button>
            </div>
            <div>
                <h3>{state2.count}</h3>
                <button onClick={() => dispatch2({type: 'INCREMENT'})}>+</button>
                <button onClick={() => dispatch2({type: 'DECREMENT'})}>-</button>
            </div>
        </>
    );
};


/** API usage and useReducer**/

const initialState = {
    data: null,
    isLoading: false,
    isError: false,
    lastUpdated: null,
};

const ApiReducer = (state, action) => {
    switch (action.type) {
        case 'REQUEST_START':
            return {
                ...state,
                isLoading: true,
            }
        case 'REQUEST_SUCCESS':
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                isError: false,
                lastUpdated: action.meta.lastUpdated,
            }
        case 'REQUEST_ERROR':
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        default:
            throw new Error('Unknown Action')
    }
};

const ApiCall = ({name}) => {
    const [state, dispatch] = useReducer(ApiReducer, initialState);

    useEffect(() => {
        const fetchData = async (name) => {
            try {
                dispatch({type: 'REQUEST_START'});
                const response = await fetch(`https://api.genderize.io/?name=${name}`);

                const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
                await sleep(3000);

                const data = await response.json();
                dispatch({
                    type: 'REQUEST_SUCCESS',
                    payload: data,
                    meta: {
                        lastUpdated: new Date(),
                    }});
            } catch (err) {
                dispatch({type: 'REQUEST_ERROR'});
            }
        }

        fetchData(name);
    }, [name]);

    if (state.isLoading) {
        return <p>Loading...</p>;
    }

    if (state.isError) {
        return <p>Something went wrong..</p>;
    }

    if (!state.data) {
        return <p>no data is available</p>
    }

    return <p>Data: {JSON.stringify(state.data)}</p>
};

export {ReducerCounter, ApiCall};