import React, { useState, useEffect } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });


function App() {

  const [filteredTask, setfilteredTask] = useState([])
  const [current, setCurrent] = useState(TASKS) 
  
  console.log(current)  

  return (
    <div className="App">      
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} filteredTask={setfilteredTask} task={current} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={setCurrent} current={current} />
      <TaskList tasks={filteredTask} update={setCurrent} current={current} />
    </div>
  );
}

export default App;
