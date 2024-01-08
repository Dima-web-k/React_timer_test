import { useEffect, useState } from 'react'
import style from './list.module.css'

export default function TaskList(){
    const [tasks_list, addTask] = useState([])

    const handleKeypress = e => {
      if (e.keyCode === 13) {
        add_task()
      }
    }

    function add_task(){
        const newTask = document.getElementById('add_input').value
        if (newTask != "" & newTask != null & tasks_list.indexOf(newTask) == -1){
            addTask([...tasks_list,newTask])
            document.getElementById("add_input").value = ""
            
        }
        else{
            document.getElementById("add_input").value = ""
        }
        console.log(tasks_list)
    }
    
    return (
        <>
            <input type='text' id='add_input' className={style.add_input} onKeyDown={handleKeypress} placeholder='Add new task...'></input>
            <button type='submit' onClick={add_task} className={style.add_button} id='add_button'>Add</button>
            <ul className={style.task_list} id='list'>
                {tasks_list.map( i => 
                    <li className={style.task}>
                        <button className={style.complete_button} onClick={function() {
                            tasks_list.splice(tasks_list.indexOf(i),1)
                            addTask([...tasks_list])
                        }}>
                            ✓
                        </button>
                        {i}
                    </li>
                )}
            </ul>
        </>
    )
}