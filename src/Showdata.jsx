import Addtask from './Addtask';
const Showdata= ({ todos, toggleStatus, editTodo, deleteTodo }) => {
    return (
        <div id="todos">
            {todos.map(todo => (
                <Addtask
                    key={todo.id}
                    todo={todo}
                    toggleStatus={toggleStatus}
                    editTodo={editTodo}
                    deleteTodo={deleteTodo}
                />
            ))}
        </div>
    );
};

export default Showdata;
