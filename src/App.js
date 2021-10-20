import { useState } from 'react'
import Header from './Components/Header'
import Tasks from './Components/Tasks'

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Practice Germany',
      description: 'Review A1.2 course & Duolingo',
      starred: false,
    },
    {
      id: 2,
      title: 'DB HW-1',
      description: 'Review and complete database HW-1',      
      starred: true,
    },
    {
      id: 3,
      title: 'DataCamp Course',
      description: 'Complete the Data Science course on DataCamp',
      starred: false,
    }
  ])

  // Toggle starred status of a task
  const toggleStarred = (id) => {
    setTasks(tasks.map(task => (task.id === id) ? {...task, starred: !task.starred} : task))
  }

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <div className="App">
      <Header />
      <br />
      {(tasks.length > 0) ? <Tasks tasks={tasks} onToggle={toggleStarred} onDelete={deleteTask} /> : <span>Yey! You can take the rest of the day off 😋</span>}
    </div>
  );
}

export default App;
