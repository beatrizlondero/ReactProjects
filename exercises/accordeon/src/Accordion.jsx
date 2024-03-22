import { useState } from "react";


export default function Accordion({data}) {
  const [currOpen, setCurrOpen] = useState(null);
  return(
    
    <div className = 'accordion'>
    {data.map((el ,i) => <AccordionItems 
    currOpen = {currOpen} 
    onOpen = {setCurrOpen}
    title = {el.title} 
    // description ={el.text} 
    num ={i} 
    key= {el.title}
    > {el.text} </AccordionItems>  )}
    {/* </div>;
    <div className = 'accordion'>
    {data.map((el ,i) => */}
    <AccordionItems 
    currOpen = {currOpen} 
    onOpen = {setCurrOpen}
    title = "Prueba" 
    // description ={el.text} 
    num ={31}
    key= "xxx"
    >
    <p>Temas a tener en cuenta</p> 
    <ul>
      <li>No dormirse en la computadora</li>
      <li>No dejar de estudiar</li>
      <li>no olvidar Ingles</li>

    </ul>
    
    </AccordionItems> 
    </div>);
}

function AccordionItems({ num, title,currOpen, onOpen,children }) {
  // const [isOpen, setIsOpen] = useState(false);
  const isOpen = num === currOpen;
  
  function HandleToggle(){
    onOpen(isOpen? null : num);
    // setIsOpen((isOpen) => !isOpen);
  }
  return <div className = {isOpen? "item open" : "item"} onClick={HandleToggle}>
    <p className='number'>{num < 10 ? `0${num+1}` : num+1}</p>
    <p className='title'>{title}</p>
    <p className='icon'>{isOpen? '-' : '+'}</p>
    {isOpen && <div className='content-box'>
      <p>{children}</p>
    </div>}

  </div>
}
