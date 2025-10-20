import React, { useState } from 'react';

export default function Counter({ initial = 0, step = 1 }) {
    const [count, setCount] = useState(initial);

    const increment = () => setCount((prev) => prev + step);
    const decrement = () => setCount((prev) => prev - step);
    const reset = () => setCount(initial);

    return (
        <div data-testid="counter">
            <h2>Counter: {count}</h2>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}
