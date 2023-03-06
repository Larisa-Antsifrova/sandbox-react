import React, {useState} from 'react';

const List = () => {
    const [todos, setTodos] = useState([])

    return (
        <div>
            {todos.map(todo =>
            <div style={{padding: 30, border: '2px solid tomato'}}>{todo.title}</div>
            )}
        </div>
    );
};

export default List;