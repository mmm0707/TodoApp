import React from 'react'
import Item from './Item'

const List = ({ todos, deleteTodo }) => {

    return (
        <ul>
            {/* <Item content={todos[0].content} />
            <Item content={todos[1].content} />
            <Item content={todos[2].content} /> */}

            {
                todos.map((todo) => {
                    return (
                        <Item
                            content={todo.content}
                            key={todo.id}
                            id={todo.id}
                            deleteTodo={deleteTodo}
                        />
                    )
                })
            }
        </ul>
    )
}

export default List