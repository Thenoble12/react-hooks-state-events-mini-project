import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit, current }) {

  const [category, setCategory] = useState("none")
  const [text, setText] = useState("")    
   
  const handleSubmit = (e) =>{
    e.preventDefault();   
    onTaskFormSubmit([...current, {text, category}]);
    setCategory("none");
    setText("");  
  } 

  return (
    <form className="new-task-form" onSubmit={(e)=>{handleSubmit(e)}}>
      <label>
        Details
        <input type="text" name="text" onChange={(e)=>{setText(e.target.value)}} value={text} />
      </label>
      <label>
        Category
        <select name="category" onChange={(e)=>{setCategory(e.target.value)}} value={category} >
           { categories.map((category) => (category!=="All") 
                                          ? (<option>{category}</option>) 
                                          : <option value="none" selected disabled hidden>Select Catagory</option>) }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
