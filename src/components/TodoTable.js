import TodoRowItem from "./TodoRowItem"

function TodoTable(props) {
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Description</th>
                    <th scope='col'>Assigned</th>
                    <th scope='col'>Delete</th>
                </tr>
            </thead>
            <tbody>
                {props.todos.map((todo,index) => (
                    <TodoRowItem
                        key={todo.rowNumber} 
                        rowNumber={index + 1} 
                        rowDescription={todo.rowDescription}
                        rowAssigned={todo.rowAssigned}
                        deleteTodo={props.deleteTodo}
                    />
                ))}
            </tbody>
        </table>
    )
}

export default TodoTable