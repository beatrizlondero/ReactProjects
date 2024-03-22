import { useState } from "react"
function OnBillChange({bill, onSetBill}){
    return(
    
        <div>
            <span> How much is the bill?</span>
            <input 
            type='text'
            placeholder='Total bill amouth'
            bill = {bill}
            onChange={(e) =>onSetBill (Number( e.target.value))}/>
        </div>
    )
    
}
export default OnBillChange