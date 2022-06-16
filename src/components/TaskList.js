import React, { useEffect, useState } from "react";
import Task from "./Task";

function TaskList({ current, update }) {

  const handleDelete = (e) => {
      update([...current.filter(i => current.indexOf(i) !== e)])
  }
  
  return (
    <div className="tasks">      
          { current.map((task, index) => {
              return <Task task={task.text} 
                           categories={task.category} 
                           key={index} 
                           id={index} 
                           handleDelete={handleDelete} />
          })}      
    </div>
  );
}

export default TaskList;
