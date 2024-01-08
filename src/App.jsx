import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Timer from './timer'
import TaskList from './list'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>

    <Timer/>
    <TaskList/>

    </>
  )
}

export default App