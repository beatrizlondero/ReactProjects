import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import StarsRating from "./assets/components/StarsRating.jsx";

// const Test = ()=> {
//   const [movieRating, setMovieRating] = useState(0);
//   return(
//     <div>

//       <StarsRating maxRating={10} color='violet' onSetRating = {setMovieRating}/>
//       <p>This movie was rated {movieRating} stars</p>
//     </div>
//   )
// }


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <StarsRating maxRating = {5} 
    color={"red"} 
    size = {50} 
    messages = {["Terrible", "Bad" ,"Okay" , "Good", "Amazing"]}/>
    <StarsRating maxRating = {10} 
    color={"blue"} 
    size = {20} 
    className = {"blue20"}/>
    <StarsRating  size = {30} defaultRating={3}/> */}
    {/* <Test/> */}
  </React.StrictMode>,
)
