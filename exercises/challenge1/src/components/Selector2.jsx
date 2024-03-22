import { useState } from "react"
function SelectTip({children, onSelect, percentish}){
    
    return(
        <div>
            <label>{children}</label>
            <select value={percentish} onChange={((e) =>onSelect( Number( e.target.value)))}>
                <option value={0}>No conforme (0%)</option>
                <option value={5}>Estuvo bien (5%)</option>
                <option value={10}>Muy buena (10%)</option>
                <option value={20}>Exelente (20%)</option>
    
            </select>
        
        </div>
        )
    }
export default SelectTip