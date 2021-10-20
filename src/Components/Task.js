import React from 'react'
import {FaTimes} from 'react-icons/fa'

function Task({ task, onToggle, onDelete }) {
    return (
        <div className={`Task whiteBg box-shadow-s border-radius-5 ${task.starred ? 'golden-border-l': ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h4>{task.title}</h4>
            <p>{task.description}</p>
            <FaTimes className='Task-times' onClick={() => onDelete(task.id)} />
        </div>
    )
}

export default Task
