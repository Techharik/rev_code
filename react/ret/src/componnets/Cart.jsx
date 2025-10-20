import React, { useState } from 'react';

export default function ShoppingCart({ initialItems = [] }) {
    const [items, setItems] = useState(initialItems);
    const [input, setInput] = useState('');

    const addItem = () => {
        if (input.trim() === '') return; // prevent empty items
        setItems([...items, input.trim()]);
        setInput('');
    };

    const removeItem = (index) => {
        setItems(items.filter((_, i) => i !== index));
    };

    const clearCart = () => setItems([]);

    return (
        <div>
            <h1>Shopping Cart</h1>
            <input
                placeholder="Add an item"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={addItem}>Add</button>
            <button onClick={clearCart}>Clear</button>

            {items.length === 0 ? (
                <p data-testid="empty-message">Cart is empty</p>
            ) : (
                <ul>
                    {items.map((item, idx) => (
                        <li key={idx}>
                            {item} <button onClick={() => removeItem(idx)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
