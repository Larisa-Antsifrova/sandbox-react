import React, {useEffect, useState, useRef} from 'react';

const List = () => {
    const [todos, setTodos] = useState([])
    const [page, setPage] = useState(1)
    const limit = 20

    const parentRef = useRef()
    const childRef = useRef()

    const fetchTodos = (page, limit)=> {
        fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`)
            .then(response => response.json())
            .then(json => setTodos(json))
    }

    useEffect(()=>{
        fetchTodos(page, limit)
    }, [])

    return (
        <div ref={parentRef}>
            {todos.map(todo =>
            <div key={todo.id} style={{padding: 30, border: '2px solid tomato'}}>{todo.title}</div>
            )}

            <div ref={childRef} style={{height: 20, backgroundColor: 'green'}}></div>
        </div>
    );
};

export default List;