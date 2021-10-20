import React from 'react'
import Task from './Task'

function Tasks({ tasks, onToggle }) {
    return (
        <>
        {tasks.map((task) => (
            <Task key={task.id} task={task} onToggle={onToggle} />
        ))}
        </>
    )
}

export default Tasks
