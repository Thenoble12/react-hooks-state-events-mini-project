import React, { useEffect, useState } from "react";

function CategoryFilter({ categories, filteredTask, task }) {

  const [selected, setSelected] = useState("All")

  let filtered = (selected === "All") ? task : task.filter(e => e.category === selected)


   useEffect(() =>{
     filteredTask(filtered)
   },[selected, task])     
   

  return (
    <div className="categories">
      <h5>Category filters</h5>
       {
        categories.map(category => {
          return ( 
            <button className={category === selected ? "selected" : ""} 
                          key={categories.indexOf(category)} 
                      onClick={() => {setSelected(category)}} >
            {category}
            </button>
          )
        })
       }        
    </div>
  );
}

export default CategoryFilter;
