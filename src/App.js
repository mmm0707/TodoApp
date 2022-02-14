import React, { useState } from 'react'
import Form from './Form'
import List from './List'
import { nanoid } from 'nanoid'


const App = () => {

    // データの数だけtodosの数だけ、Itemコンポーネントを呼び出す
    const [todos, setTodos] = useState([])

    const addTodo = (value) => {
        setTodos([
            ...todos,
            {
                content: value,
                id: nanoid()
            },
        ])
    }

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    return (
        <React.Fragment>
            <h1>Todo App</h1>
            <Form addTodo={addTodo} />
            <List todos={todos} deleteTodo={deleteTodo}></List>
        </React.Fragment>
    )
}

export default App