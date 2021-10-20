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

  return (
    <div className="App">
      <Header />
      <br />
      <Tasks tasks={tasks} onToggle={toggleStarred} />
    </div>
  );
}

export default App;
