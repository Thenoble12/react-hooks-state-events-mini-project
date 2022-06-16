import React, { useEffect, useState } from "react";
import Task from "./Task";

function TaskList({ tasks, current, update }) {
  
  const [list, setList] = useState([])
  let tasksCopy = [...list];

  useEffect(()=>{
      setList([...tasks])
      
  },[JSON.stringify(tasks)])

   console.log([tasks])
   console.log([list]);
   console.log([tasksCopy])

  const handleDelete = (e,t) => {
      setList([...tasksCopy.filter(i => tasksCopy.indexOf(i) != e)])
      update([...current.filter(i => i.text != t)])
  }

  return (
    <div className="tasks">      
          { tasksCopy.map((task) => {
              return <Task task={task.text} 
                           categories={task.category} 
                           key={tasksCopy.indexOf(task)} 
                           id={tasksCopy.indexOf(task)} 
                           handleDelete={handleDelete} />
          })}      
    </div>
  );
}

export default TaskList;
