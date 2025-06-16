import {useReducer} from "react";

/** useReducer **/
// useReducer takes reducerFunc, an initial state(, and initFunc.)
// The reducerFunc is used to create a new state from prevState and an action object.
// The reducerFunc is executed when dispatch(action) is called. dispatch is returned by the userReducer.

const initState = {
    count: 0,
};

const reducerFunc = (state, action) => {
    switch (action.type) {
        case '+':
            return {count: state.count + 1};
        case '-':
            return {count: state.count - 1};
    }
}

const initFunc = (value) => ({count: value});

const ReducerCounter = (props) => {
    const [state, dispatch] = useReducer(reducerFunc, initState);
    const [state2, dispatch2] = useReducer(reducerFunc, props.value, initFunc);

    return (
        <>
            <div>
                <h3>{state.count}</h3>
                <button onClick={() => dispatch({type: '+'})}>+</button>
                <button onClick={() => dispatch({type: '-'})}>-</button>
            </div>
            <div>
                <h3>{state2.count}</h3>
                <button onClick={() => dispatch2({type: '+'})}>+</button>
                <button onClick={() => dispatch2({type: '-'})}>-</button>
            </div>
        </>
    );
}

export {ReducerCounter};