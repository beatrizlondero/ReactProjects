import { useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the CSS for styling
import './App.css'
import AltaComercio from './AltaComercio';
import ImageUpload from './ImageUpload';
import axios from "axios";

const producto = [
  {
    id: 118836,
    name: "Leche la serenisima",
    date : "01/31/2024",
    category: "Lacteos",
    shop: "Super MAMI",
    adress : "Ruta 9",
    city:"Colonia Caroya",
    price: 752.00,
    
  },
  {
    id: 1836,
    name: "limpria vidrios vim",
    date : "01/28/2024",
    category: "Limpieza",
    shop: "Super MAMI",
    adress : "Ruta 9",
    city:"Colonia Caroya",
    price: 72.00,
    
  },
]


// const [image, setImage] = useState(null);

// const handleImageChange = (e) => {
//   const file = e.target.files[0];
//   const reader = new FileReader();

//   reader.onload = () => {
//     const blob = new Blob([reader.result]);
//     const stream = blob.stream().pipe();
//     setImage(stream);
//   };

//   reader.readAsDataURL(file);
// };



function App() {
    const [addCity, setAddCity] = useState(false)
    const currentDate = new Date();
    
    const [startDate, setStartDate] = useState(currentDate);
    const [selectedOption, setSelectedOption] = useState(null);
    const citys = ["Colonia Caroya", "Jesus Maria", "Sinsacate"];
    const [addNewCity, setAddNewCity] = useState(citys)
    const [selectedCity, setSelectedCity] = useState("")
    const [categoria, setCategoria] = useState("");
    let newCity;

    function handleOptionChange (event) {
        setSelectedOption(event.target.value);
      };
      function CargarCitys(){
        return(
           addNewCity.map((city) => <option value={city}>{city}</option>)
        )
      }
      function HandleClickCity(){
        if (addCity === false){
          setAddCity(true)
          
        }else{
          setAddNewCity(addNewCity => [...addNewCity, newCity]);
          console.log(addNewCity);
          setAddCity(false);
          return ;
        }
      }
      function LabelOption({children,value, onSelect}){
        return(
          <label  className='input-radio'>
              <input
               
                type="radio"
                value= {value}
                checked={selectedOption === value}
                onChange={handleOptionChange}
                name="options"
                onClick = {onSelect}
              />
                {children}
              </label>
            )
      }
      function handleAgregarCiudad(e){
        newCity = e.target.value;
      }

    
      function handleCategorie(e){
        console.log(selectedCity);
       
        setCategoria(e.target.value);
        
      }
      function handleClicSelectCity(e){
        console.log(e.target.value)
        setSelectedCity(e.target.value);
      }


      return (
        <>
          <header>
            <h1> Encuentre los mejores precios </h1>
            <AltaComercio/>
            <div className='div-city'>
              <h3>Seleccione la Ciudad</h3>
              <select onClick={handleClicSelectCity}>
                {selectedCity != ""? <CargarCitys/> : null}
              </select>
              <button onClick={HandleClickCity}>{addCity? "Confirmar" : "Agregar Ciudad"}</button>
              {addCity? 
                <input
                type='text'
                label= "Ingrese nombre de ciudad"
                onChange={handleAgregarCiudad}/>: ""}
            </div>
            <div >
              <div>
                 <h3 className='label-option'>Seleccione Categoria de Producto</h3>
              </div>
              <div className='option-div'>
    
                <LabelOption value = "Lacteos" onSelect ={handleCategorie}>Lacteos</LabelOption>
                <LabelOption value = "Pastas" onSelect ={handleCategorie}>Pastas</LabelOption>
                <LabelOption value = "Aceites" onSelect ={handleCategorie}>Aceites</LabelOption>
                <LabelOption value = "Galletas" onSelect ={handleCategorie}>Galletas</LabelOption>
                <LabelOption value = "Vinos" onSelect ={handleCategorie}>Vinos</LabelOption>
                <LabelOption value = "Gaseosas" onSelect ={handleCategorie}>Gaseosas</LabelOption>
                <LabelOption value = "Limpieza" onSelect ={handleCategorie}>Limpieza</LabelOption>
                <LabelOption value = "Otros" onSelect ={handleCategorie}>Otros</LabelOption>
              </div>
            
            </div>
          </header>
          <main>
            <div>
              <div className='div-fecha'>
                <h3>Fecha</h3>
                <DatePicker selected={startDate} 
                  value={startDate}
                  onChange={date => setStartDate(date)} />
              </div>
    
              {/* <button onClick={HandleListar} >{ !listar? "Listar" : "Cerrar listado"}</button>
              <button onClick={HandleAgregarProducto}>Agregar Producto</button> */}
              <button>Listar</button>
              <button>Agregar Producto</button>
              {/* <button onClick={handleImageChange}>Agregar imagen</button> */}
              <ImageUpload/>
            </div>
          </main>
        </>
      )
     

}
export default App;