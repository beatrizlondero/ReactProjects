import React, { useState } from 'react';


function Counter(){
    const [step, setStep] = useState(1);
    const [count, setCount] = useState(0);
    // const otro =useEffect(HandleCountPlus,[Set])
    const styleButton = {backgroundColor : "blue" , color: "#fff", 
      fontSize: "20" , with : "100px", height: "30px"}
    const styleSpan = {padding: "10px", margin: "5px", fontSize : "25px"};
  
    const currentDate = new Date(); 
    function HandleStepPlus(){
        setStep ((s) => s + 1)
    }
    function HandleStepMinus(){
      setStep ((s) => s - 1)
    }

    function HandleCountPlus(){
        if (step != 1 ){
            setCount((c) => c = c + step)
        } else {
            setCount ((c) =>c = (c + step))
        }
    }
    function HandleCountMinus(){
        if (step != 1 ){
            setCount((c) => c = c - step)
        } else {
            setCount ((c) =>c = (c - step))
        }
    }
    function changeDay(){
        const changeD = new Date (currentDate);
        changeD.setDate(currentDate.getDate() + count);
        return changeD.toDateString();
    }
    const handleSliderChange = (event) => {
      const value = parseInt(event.target.value, 10);
      setStep(value);
    };
    function handleClickButton(){
      setCount (0);
      setStep(1);
    }
    return (
      <>
        <div  >
          <input type='range' min={0} max={10} 
          value={step}
          onChange={e => setStep(+(e.target.value))}
          ></input>
           <span style={styleSpan}>Step : {step}</span>
        </div>
        <div className='button'>
           <button style={styleButton}
             onClick={HandleCountMinus}
            > - </button>
          <input type="text" value={count}
          onChange={e => setCount(+(e.target.value))}/>
          <button style={styleButton}
          onClick={HandleCountPlus}
          > + </button>
  
        </div>
        <div>
            <h1> {count === 0 ? `Today is ${changeDay()}`: count >0 ? `${count} days from today is ${changeDay()}`
             :  `${count} days ago was ${changeDay()}`}</h1>
        </div>
        <div>
          {(count !== 0 || step !== 1) ?
          (<button className='button' onClick={handleClickButton}>Resert</button>) :
          null}

          </div>
          
          
      </>
    )
  }

  export default Counter