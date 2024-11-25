import React from 'react'
import { FaRegEdit } from "react-icons/fa";
import Card from './Card';

function ToDoList(props) {
    
    const {todos} = props

    return (
        <ul className="main mb-20">
            {todos.map((todo, todoIndex) => {
                return (
                    <Card {...props} key={todoIndex} index={todoIndex}>
                        <p>{todo}</p>
                    </Card>
                )
            })}
        </ul>
    )
}

export default ToDoList

