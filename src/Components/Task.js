import React from 'react'

function Task({ task, onToggle }) {
    return (
        <div className={`Task ${task.starred ? 'Task-starred': ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
        </div>
    )
}

export default Task
