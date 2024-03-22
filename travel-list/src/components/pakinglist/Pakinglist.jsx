import Item from "./items";
import { useState } from "react";

function PakingList({items, onDeleteItem, onToggleItem, onClear}){
    const [sortedBy, SetSortedBy] = useState('input');
    let sortedItems;
  
    if(sortedBy === "input") sortedItems = items;
  
    if(sortedBy === "description") 
      sortedItems = items.slice().sort((a,b) => a.description.localeCompare(b.description));
  
      if(sortedBy === "packed") 
      sortedItems = items.slice().sort((a,b) => +(a.packed) - +(b.packed));
  
    
    return(
        <div className="list">
          <ul>
            {
              sortedItems.map((item)=>(
                  <Item item={item} onDeleteItem ={onDeleteItem} onToggleItem={onToggleItem} key = {item.id}/>
              ))
            }
          </ul>
          <div className='actions'>
            <select value={sortedBy} onChange={(e) =>SetSortedBy(e.target.value)}>
              <option value= 'input'>Sort by input order</option>  
              <option value= 'description'>Sort by description</option>  
              <option value= 'packed'>Sort by packed status</option>  
  
            </select> 
            <button onClick={onClear}>Clear List</button> 
          </div>  
  
  
        </div>
  
  
    )
  }
  
export default PakingList