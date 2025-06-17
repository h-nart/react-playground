import {useMemo, useState} from "react";

const fibonacci = (num) =>
    num <= 1 ? 1 : fibonacci(num - 1) + fibonacci(num - 2);

const UseMemoApp = () => {
    const [value, setValue] = useState(0);

    const costlyFibonacci = () => fibonacci(40);
    const memoizedCostlyFibonacci = useMemo(() => fibonacci(40), []);

    return (
        <>
            <p>Fibonacci: {value}</p>
            <button onClick={() => setValue(0)}>Reset</button>
            <button onClick={() => setValue(costlyFibonacci())}>Costly fib(40)</button>
            <button onClick={() => setValue(memoizedCostlyFibonacci)}>Memoized fib(40)</button>
        </>
    );
};

export default UseMemoApp;