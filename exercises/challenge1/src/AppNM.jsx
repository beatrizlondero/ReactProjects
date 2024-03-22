// import { useState } from 'react'
// import Selector from './components/Selector';
// import './App.css'

// function App() {
//   const [amount, setAmount] = useState(0);
//   const [tip, setTip] = useState(0);
//   const [tipfriend, setTipFriend] = useState(0);
  
//   function handleOnClic(){
//     setAmount(0);
//     setTip(0);
//     setTipFriend(0);
//   }
//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };
//   const handleOptionClick = (option) => {
//     setSelectedOption(option);
//     setIsOpen(!isOpen);
//   };
  
//   return (
//     <>
//       <div>
//         <span>How much is the bill?:  
//           <input></input>
//         </span>
//       </div>
//       <Selector OntoggleMenu = {toggleMenu} OnOptionClic = {handleOptionClick}/>
//         {/* <div className="dropdown">
//             <span>How did you like the service?:</span>
//            <div className={`dropdown-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
//               {selectedOption || ''}
//             <span className="arrow">&#9660;</span>
//           </div>
//           {isOpen && (
//             <ul className="dropdown-options">
//               <li value = '0' onClick={() => handleOptionClick('It was bad 0%')}>It was bad 0%</li>
//               <li value = '5' onClick={() => handleOptionClick('It was fine 5%')}>It was fine 5%</li>
//               <li value = '10' onClick={() => handleOptionClick('It was good 10%')}>It was good 10%</li>
//               <li value = '20' onClick={() => handleOptionClick('It was amazing 20%')}>It was amazing 20%</li>

//             </ul>
//           )}
//         </div> */}
//       <div>

//         <span>How did your friend like the service?:  
//           <input></input>
//         </span>
//       </div>
//       <div>
//         <h2>`Your pay ${}: (${} + ${})` </h2>
//       </div>
//       <div>
//         <button onClick={handleOnClic}>Resert</button>
//       </div>

     
//     </>
//   )
// }

// export default App
// import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
        How did your friend like the service?
      </SelectPercentage>

      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ children, percentage, onSelect }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <h3>
      You pay ${bill + tip} (${bill} + ${tip} tip)
    </h3>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}