import { useState } from 'react'
import Header from './Components/Header'
import Tasks from './Components/Tasks'
import Form from './Components/Form'

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Practice Germany',
      description: 'Review A1.2 course & Duolingo.',
      starred: false,
    },
    {
      id: 2,
      title: 'DB HW-1',
      description: 'Review and complete database HW-1.',      
      starred: true,
    },
    {
      id: 3,
      title: 'DataCamp Course',
      description: 'Complete the Data Science course on DataCamp.',
      starred: false,
    }
  ])
  const [showForm, setShowForm] = useState(false)

  // Toggle the form
  const toggleForm = () => {
    setShowForm(!showForm)
  }

  // Toggle starred status of a task
  const toggleStarred = (id) => {
    setTasks(tasks.map(task => (task.id === id) ? {...task, starred: !task.starred} : task))
  }

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  // Add a task
  const addTask = (task) => {
    const id = tasks.length + 1
    const newTask = {...task, id}
    setTasks([...tasks, newTask])
  }

  return (
    <div className={`App border-radius-5`}>
      <Header />

      <div className="flex-box">
        <button className={`ToggleBtn border-radius-5`} onClick={toggleForm}>{showForm ? 'Hide Form' : 'Show Form'}</button>
      </div>

      { showForm && <Form onAdd={addTask} />}
      <br />
      {(tasks.length > 0) ? <Tasks tasks={tasks} onToggle={toggleStarred} onDelete={deleteTask} /> : <span>Yey! You can take the rest of the day off 😋</span>}
    </div>
  );
}

export default App;
