import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App(){
  return(
    <div className='container'>
      <Header/>
      <Menu/>
      <Footer/>
    </div>
  )
}

function Header (){
  return (
    <div className='header'>
      <h1> Pizza React && CO.</h1>
    </div>
  )
}

function Menu(){
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return(
    <main className='menu'>
      <h2>Nuestro Menu</h2>
      {numPizzas > 0 ?
        <React.Fragment> 
          {/* or you can write only <>   </> in short version*/}
            <p>
              Authentic italian cuisine. 6 creative dishes to choose from. All from our
              stone oven, all organic, all delicious.
            </p>
            (<ul className='pizzas'>
              { pizzas.map((pizza)=>
                (<Pizza pizzaObj = {pizza} key = {pizza.name}/>))
              }
            </ul>)
          </React.Fragment>
        : (<p>We're still working in our menu please came back later :-)</p>
        )} 
    </main>
  )
}

function Pizza({pizzaObj}) {
  // if (pizzaObj.soldOut) return null;
  return (
    <li className={`pizza ${pizzaObj.soldOut? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name}></img>
       <div >
        <h3>{pizzaObj.name}</h3>
        <p>
          {pizzaObj.ingredients}
        </p>
        <span> {pizzaObj.soldOut ? "Sold Out" : pizzaObj.price + 500}</span>
     </div>
    </li>
  )
}

function Footer(){
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 23;
  console.log (hour);
  const isOpen = hour >= openHour && hour <= closeHour;
  
  
  return(
    <footer className='footer'>{isOpen ? (
        <Option
        openHour = {openHour}
        closeHour = {closeHour}/>
      ) :
      <p> We're happy to welcome you between {openHour}:00 and {closeHour}:00.</p> }
     
      
      
  </footer>)
}

function Option({openHour,closeHour}){
  return <div className='order'>
          <p>We're open until {closeHour}:00. Come visit us or order online. </p>
          {console.log(openHour)}
          <button className='btn'>Order</button>
        </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
