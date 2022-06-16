import React, { useState, useEffect } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });


function App() {

  const [filter, setFilter] = useState([])
  const [current, setCurrent] = useState(TASKS) 

  let filtered = (filter === "All") ? current : current.filter(e => e.category === filter)     
  
  return (
    <div className="App">      
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} task={current} filter={setFilter}  />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={setCurrent} current={current} />
      <TaskList  update={setCurrent} current={filtered} />
    </div>
  );
}

export default App;
