import React from "react";

function Task({ task, categories, id, handleDelete }) { 
  return (
    <div className="task">
      <div className="label">{categories}</div>
      <div className="text">{task}</div>
      <button onClick={()=>handleDelete(id,task)} className="delete">X</button>
    </div>
  );
}

export default Task;
                                                                          