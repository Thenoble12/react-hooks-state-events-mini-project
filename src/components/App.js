import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });


function App() {

  const [filteredTask, setfilteredTask] = useState([])
  const [current, setCurrent] = useState(TASKS)  

  console.log(filteredTask)

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} filteredTask={setfilteredTask} task={current} />
      <NewTaskForm />
      <TaskList tasks={filteredTask}  update={setCurrent} current={current}/>
    </div>
  );
}

export default App;
