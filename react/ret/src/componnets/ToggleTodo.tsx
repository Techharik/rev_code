import React, { useState } from 'react';

export default function TodoList() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const addTodo = () => {
        if (input.trim() !== '') {
            setTodos([...todos, { text: input, done: false }]);
            setInput('');
        }
    };

    const toggleTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].done = !newTodos[index].done;
        setTodos(newTodos);
    };

    return (
        <div data-testid="todo-list">
            <h1>My Todo List</h1>
            <input
                placeholder="Add a todo"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={addTodo}>Add</button>
            <ul>
                {todos.map((todo, i) => (
                    <li
                        key={i}
                        className={todo.done ? 'done' : ''}
                        onClick={() => toggleTodo(i)}
                    >
                        {todo.text}
                    </li>
                ))}
            </ul>
        </div>
    );
}
