import React from 'react';
import ReactDOM from 'react-dom/client';
//import "./index.css";

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
    return (
        <div className= "container">
           <Header/>
           <Menu/>
           <Footer/>

        </div>
    )
        
}

function Header() {
    // const titleStyle = {color:"green", fontFamily : "roboto", fontSize: "42px", textTransform : "uppercase", textAlign: "center"};
    const titleStyle = {};
    return(
        <Header className ="header">
            <h1 style={titleStyle}>Pizzeria React & CO.</h1>
        </Header>
        // <h1 style={titleStyle} className='header'> Pizzeria dalla Beatrice </h1>
    )
}

function Menu(){
    return (
        <main className="menu">
            <h2>Nuestro Menu</h2>
            <Pizza/>
            <Pizza/>
            <Pizza/>
        </main>
    )
}

function Footer(){
    //return React.createElement("footer",null, "Estamos abiertos hasta las 22:00 hs"); 
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    if (hour >= openHour && hour <= closeHour){ alert ("We're OPEN")} else {alert ("We're CLOSED")};


    return <footer className='footer'>{new Date().toLocaleTimeString()}. We're currently open </footer>
}

function Pizza(){
    return (
        <div>
            <img src="pizzas/prosciutto.jpg" alt='Pizza prosciutto'></img>
            <h3>Pizza Prosciutto</h3>
            <p>
                Tomato, mozarella, ham, aragula, and burrata cheese
            </p>
        </div>
    )
    
}



//React ver 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // this is for more control during the develop mode
    <React.StrictMode> 
        <App/>
    </React.StrictMode>
);

