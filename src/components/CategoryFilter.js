import React, { useEffect, useState } from "react";

function CategoryFilter({ categories, task, filter }) {

  const [selected, setSelected] = useState("All")

   useEffect(() =>{
    filter(selected)
   },[selected, task])     
   

  return (
    <div className="categories">
      <h5>Category filters</h5>
       {
        categories.map((category, index) => {
          return ( 
            <button className={category === selected ? "selected" : ""} 
                          key={index} 
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
