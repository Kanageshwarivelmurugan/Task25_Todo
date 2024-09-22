import React, { useState } from 'react';

const Form = ({ addTodo }) => {
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!taskName) return;
        addTodo(taskName, taskDescription);
        setTaskName('');
        setTaskDescription('');
        setTaskStatus('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                placeholder="Task Name"
            />
            <input
                type="text"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                placeholder="Task Description"
            />
            <button className="btn btn-primary" type="submit">Add Task</button>
        </form>
    );
};

export default Form;
