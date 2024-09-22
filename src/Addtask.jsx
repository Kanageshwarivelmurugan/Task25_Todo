const Addtask = ({ todo, toggleStatus, editTodo, deleteTodo }) => {
    return (
        <div className="card">
            <h3>Name: {todo.name}</h3>
            <h4>Description: {todo.description}</h4>
            <p>
                Status: <span onClick={() => toggleStatus(todo.id)} style={{ cursor: 'pointer', color: todo.completed ? 'green' : 'red' }}>
                    {todo.completed ? 'Completed' : 'Not Completed'}
                </span>
            </p>
            <button className="btn btn-success" onClick={() => editTodo(todo.id)}>Edit</button>
            <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
    );
};

export default Addtask;
