/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [ofMoney, setOfMoney] = useState("USD");
  const [toMoney, setToMoney] = useState("USD");
  const [quantity, setQuantity] = useState(0);
  const [result, setResult] = useState([]);
  
  useEffect(() => {

    const host = "api.frankfurter.app";
    const controller = new AbortController();
    async function fetchcurrency() {
      if (quantity>0 && ofMoney !== toMoney) {
        const res = await fetch(`https://api.frankfurter.app/latest?amount=${quantity}&from=${ofMoney}&to=${toMoney}`,{signal: controller.signal})
        const data = await res.json();
        setResult(data.rates);
      } 
      else {
        setResult(quantity);
      }
      return ()=>{
        controller.abort();
      }
    }
    
      fetchcurrency();
  }, [ofMoney, toMoney, quantity]);
  
  

  return (
    <>
      <div>
        <input type="text" onChange={(e) => setQuantity(Number(e.target.value))}/>
        <select onChange={(e) => setOfMoney(e.target.value)}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>
        <select onChange={(e) => setToMoney(e.target.value)}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>
        {result.EUR && <p>{`Lo que obtiene pasando ${quantity} ${ofMoney} a ${toMoney} es ${result.EUR} ${toMoney}`}</p>}
        {result.USD && <p>{`Lo que obtiene pasando ${quantity} ${ofMoney} a ${toMoney} es ${result.USD} ${toMoney}`}</p>}
        {result.CAD && <p>{`Lo que obtiene pasando ${quantity} ${ofMoney} a ${toMoney} es ${result.CAD} ${toMoney}`}</p>}
        {result.INR && <p>{`Lo que obtiene pasando ${quantity} ${ofMoney} a ${toMoney} es ${result.INR} ${toMoney}`}</p>}
        {result === quantity && <p>{`Lo que obtiene pasando ${quantity} ${ofMoney} a ${toMoney} es ${quantity} ${toMoney}`}</p>}
      </div>
    </>
  );
}

export default App
