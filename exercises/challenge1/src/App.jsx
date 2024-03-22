import { useState } from "react"

import OnBillChange from "./components/Selector";
import SelectTip from "./components/Selector2";
export default function App(){
    // const [tip, setTip] = useState("0");
    // const [bill, setBill] = useState(0);
    // const [friendTip, setFriendTip] = useState(0);

    // const ttip = calcularttip() ;
    // function calcularttip() {
    //     if (tip >0 && friendTip >0 ) return bill *((tip+friendTip)/2 /100)
    //     else if(tip>0) return bill*tip/100
    //     else return bill * friendTip /100 ;}
    // function handleReset(){
    //     setBill("");
    //     setTip(0);
    //     setFriendTip(0);
    // }
    // return (
    //     <div>
    //         <TotalBill bill={bill} onSetBill={setBill}/>
    //         <TipSelect 
    //         onSelect = {setTip} percentish={tip}
    //         ><span>How did you like the service? :</span>
    //         </TipSelect> 
    //         <TipSelect 
    //         onSelect = {setFriendTip} percentish={friendTip}
    //         ><span>How did your friend like the service? :</span>
    //         </TipSelect> 
    //         {bill > 0 &&
    //             <>
    //                 <h3>Your pay ${bill+ttip} (${bill} + ${ttip}) </h3>
    //                 <div>

    //                     <button onClick={handleReset}>Resert</button>
    //                 </div>
    //             </>
    //         }
    //     </div>
    // )
    // return  <Selector/>
// }


// function TotalBill({bill, onSetBill}){
//     // console.log(bill + "entotalbill");
//     return(
//         <div>
//             <span>How much was the bill? :  </span>
            
//             <input
            
//             type="text"
//             placeholder = "Bill value" 
//             value={bill}
//             onChange={(e) => onSetBill(Number(e.target.value))}/>
            
//         </div>
//     )
// }

// function TipSelect({children, percentish, onSelect}){
        
//     return(
//         <div>
//             <label>{children}</label>
//             <select value={percentish}
//              onChange= {(e)=>onSelect (+(e.target.value))}
//               > 
//             <option value={0}>Dissatisfied (0%)</option>
//             <option value={5}>It was OK (5%)</option>
//             <option value={10}>It was fine (10%)</option>
//             <option value={20}>It was amazing (20%)</option>
//             </select>
//         </div>
//     )
// }
const [bill, setBill] = useState("");
const [tip, setTip] = useState(0);
const [tipFriend, setTipFriend] = useState(0);

    function handleClickdelete(){
        setBill("0");
        setTip(0);
        setTipFriend(0);
    }

    const calculateTip = calculo();
    function calculo(){
        if(tip>0 && tipFriend>0){
            return Number(bill) *(tip+tipFriend)/2/100;
        } 
        else if(tip === 0 && tipFriend > 0){ return Number(bill) * tipFriend/100}
        else if (tip >0 && tipFriend ===0){ return Number(bill) *tip/100}
        else return 0;
    } 
return (
    <>
        <OnBillChange bill={bill} onSetBill = {setBill}/>
        <div>
       
            <SelectTip percentish = {tip} 
             onSelect = {setTip}> 
             <span>How did you like the service?</span>
             </SelectTip>
            <SelectTip  percentish = {tipFriend} 
            onSelect = {setTipFriend}> 
            <label>How did your friend like the service?</label>
            </SelectTip>
        </div>
        {bill != 0 &&
        <div>
            <h3>Your pay ${bill+calculateTip } (${bill} + ${calculateTip}) </h3>
            <button 
            onClick={handleClickdelete}
            >Resert</button>
        </div>}
        
    </>

)

}


