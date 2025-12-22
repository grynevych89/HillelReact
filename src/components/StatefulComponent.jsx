import { useState, useEffect } from 'react';

const StatefulComponent = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : [];
    });
    const [inputValue, setInputValue] = useState('');
    const [timeSpent, setTimeSpent] = useState(0);

    useEffect(() => {
        console.log('Component mounted');

        const timer = setInterval(() => {
            setTimeSpent(prev => prev + 1);
        }, 1000);

        return () => {
            console.log('Component will unmount');
            clearInterval(timer);
        };
    }, []);

    useEffect(() => {
        if (count !== 0) {
            console.log(`Count changed to: ${count}`);
        }
    }, [count]);

    useEffect(() => {
        if (todos.length > 0) {
            localStorage.setItem('todos', JSON.stringify(todos));
        }
    }, [todos]);

    const increment = () => setCount(prev => prev + 1);
    const decrement = () => setCount(prev => prev - 1);
    const reset = () => setCount(0);

    const addTodo = () => {
        if (inputValue.trim()) {
            setTodos(prev => [...prev, { id: Date.now(), text: inputValue, completed: false }]);
            setInputValue('');
        }
    };

    const removeTodo = (id) => {
        setTodos(prev => prev.filter(todo => todo.id !== id));
    };

    const toggleTodo = (id) => {
        setTodos(prev =>
            prev.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className="stateful-component">
            <h2>Stateful Component (with useState & useEffect)</h2>

            <div className="time-tracker">
                <p>⏱️ Time on page: <strong>{formatTime(timeSpent)}</strong></p>
            </div>

            <div className="counter-section">
                <h3>Counter</h3>
                <div className="counter-display">
                    <span className="count-number">{count}</span>
                </div>
                <div className="counter-buttons">
                    <button className="btn btn-small" onClick={decrement}>-</button>
                    <button className="btn btn-small btn-reset" onClick={reset}>Reset</button>
                    <button className="btn btn-small" onClick={increment}>+</button>
                </div>
            </div>

            <div className="todo-section">
                <h3>Todo List (saved to localStorage)</h3>
                <div className="input-group">
                    <input
                        type="text"
                        className="input"
                        placeholder="Add new todo..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && addTodo()}
                    />
                    <button className="btn btn-clear" onClick={addTodo}>Add</button>
                </div>
                <ul className="todo-list">
                    {todos.map((todo) => (
                        <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => toggleTodo(todo.id)}
                            />
                            <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
                            <button
                                className="btn-remove"
                                onClick={() => removeTodo(todo.id)}
                            >
                                ×
                            </button>
                        </li>
                    ))}
                </ul>
                {todos.length === 0 && (
                    <p className="empty-message">No todos yet. Add one above!</p>
                )}
                {todos.length > 0 && (
                    <p className="todo-stats">
                        Total: {todos.length} | Completed: {todos.filter(t => t.completed).length}
                    </p>
                )}
            </div>
        </div>
    );
};

export default StatefulComponent;