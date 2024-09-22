import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
import Form from './Form';
import Showdata from './Showdata';


const App = () => {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('all');

    const addTodo = (name, description) => {
        const newTodo = {
            id: Date.now(),
            name,
            description,
            completed: true
            
            
        };
        setTodos([...todos, newTodo]);
    };

    const editTodo = (id) => {
        const todo = todos.find(t => t.id === id);
        const newName = prompt("Edit task name", todo.name);
        const newDescription = prompt("Edit task description", todo.description);
        if (newName) {
            setTodos(todos.map(t => (t.id === id ? { ...t, name: newName, description: newDescription || t.description } : t)));
        }
    };

    const deleteTodo = (id) => {
        if (window.confirm("Are you sure you want to delete this task?")) {
            setTodos(todos.filter(t => t.id !== id));
        }
    };

    const toggleStatus = (id) => {
        setTodos(todos.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)));
    };

    const filteredTodos = todos.filter(todo => {
        if (filter === 'completed') return todo.completed;
        if (filter === 'not_completed') return !todo.completed;
        return true;
    });

    return (
        <div  id="app" >
           <h1>Todo App </h1>
           <br/>
           <div className="container">
            
            <Form addTodo={addTodo} />
            <div>
                <label htmlFor="filter">Filter by Status:</label>
                <select onChange={(e) => setFilter(e.target.value)} value={filter}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="not_completed">Not Completed</option>
                </select>
            
            </div>
            </div>
            <div>
            <Showdata todos={filteredTodos} toggleStatus={toggleStatus} editTodo={editTodo} deleteTodo={deleteTodo} />
        </div>
        </div>
    );
};

export default App;
