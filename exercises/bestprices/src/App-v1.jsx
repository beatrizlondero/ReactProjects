import { useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the CSS for styling
import './App.css'

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
function ListarProducto({product, categoria}){
  console.log(categoria + " en listarproducto")
  const listadoFiltrado = product.filter((prod) => prod.category === categoria 
  );
  console.log (listadoFiltrado);
  return(
    <h1>ACA ESTOY</h1>
    // <ul>
    //   {listadoFiltrado.map((prod) => (
    //     // console.log(prod)
    //   //  <CargarProducts prod = {prod} key = {prod.id}  />
    //   <li>{prod.name}</li>
    //   ))}
    // </ul>
    // <button>{listadoFiltrado}</button>
  )
}

// function ListarProducto({product,startDate,categoria, selectedCity}){
//   console.log("listarproducto   " );
//   return(
//     // listar && 
//     <div className="container">
//       <h2>Product Information</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Producto</th>
//             <th>Precio</th>
//             <th>Nombre del Negocio</th>
//             <th>Direccion</th>
//           </tr>
//         </thead>
//         <tbody>
//           <CargarProducts product = {product} fecha = {startDate} categoria = {categoria} selectedCity={selectedCity}/>
//         </tbody>
//       </table>
//     </div>
         
//   )
// }

function CargarProducts({prod}){
  console.log("EN CARGAR PRODUCTS")
  // console.log(prod.date + "   " + startDate + " " + prod.city + prod.category);
  const listadoFiltrado = prod.filter((prod) => prod.category === categoria 
  );
  // console.log(listadoFiltrado);
    return( listadoFiltrado.map((product) =>
      //  (<MostrarProducto product = {product} key = {product.id}/>)
      <li>{product.name}</li>
       ) )
 
}

function MostrarProducto({product}){

  return (
  <tr>
    <th>{product.name}</th>
    <th>{product.price}</th>
    <th>{product.shop}</th>
    <th>{product.adress}</th>
  </tr>
          
  )

}

function Friend(){
    console.log("friend")
  return(
    <>
      <ul>

        <li>
          <h3>Aca estoy</h3>
          
        </li>
      </ul>
    </>
  )
}

// function FormAddFriend({onAddFriend}){
//   const [name, setName] = useState("")
//   const [image, setImage] = useState("https://i.pravatar.cc/48")
  
//   function handleSubmit(e){
//     e.preventDefault();

//     if(!name || !image) return;
//     const id = crypto.randomUUID();
//     const newFriend ={
//       id,
//       name,
//       image: `${image}?=${id}`,
//       balance:0,
//     };
//     onAddFriend(newFriend);
    
//     setName("");
//     setImage("https://i.pravatar.cc/48");
//   }

//     return(
//       <form className='form-add-friend' onSubmit={handleSubmit}>
//         <label>🤼‍♀️Friend Name: </label>
//         <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
//         <label>🖼️ Image URL: </label>
//         <input type='text' value={image} onChange={(e) => setImage(e.target.value)}/>
//         <Button>Add Friend</Button>
       
//       </form>
//     )
// }

// function Button({children, onClick}){

//    return <button className='button' onClick={onClick}>{children}</button>  

// }


// function FormSplitBill({selectedFriend, onSplitBill}){
//   const [billValue, setBillValue] = useState("");
//   const [yourExpense, setYourExpense] = useState("");
//   const [optionPaid, setOptionPaid] = useState("you")
//   const calculateFriendBill = billValue ? billValue - yourExpense : "";
 
//   function handleSplitBillSubmit(e){
//     e.preventDefault();
//     if (!billValue || !yourExpense) return;
//     onSplitBill(optionPaid === "you" ? calculateFriendBill :  -yourExpense)

//   }
  
//   return(
//     <form className='form-split-bill' onSubmit={handleSplitBillSubmit}>
//       <h2>SPLIT A BILL WITH {selectedFriend.name}</h2>
//       <label>💵 Bill value :$ </label>
//       <input type='text' value={billValue} onChange={(e) => setBillValue(Number(e.target.value)) }/>
      
//       <label>🕴️Your expense: </label>
//       <input type='text' value={yourExpense} onChange={ (e) => setYourExpense (Number(e.target.value)>billValue ?
//          yourExpense : Number(e.target.value)) }/>  
      
//       <babel>🤼‍♀️ {selectedFriend.name}'s expense: </babel>
//       <input type='text' disabled value={calculateFriendBill} /> 
      
//       <label>🤑  Who is paying the bill?</label>
//       <select value={optionPaid} onChange={(e) => setOptionPaid(e.target.value)}>
//         <option value="user">You</option>
//         <option value="friend">{selectedFriend.name}</option>

//       </select>
      
//       <Button>Split Bill</Button>
//     </form>
//   )
// }


// function App() {
//   const [addFriend, setAddFriend] = useState(false)
//   const [friends, setFriends] = useState (initialFriends);
//   const [selectedFriend, setSelectedFriend] = useState(null);

//   function handleSplitBill(value){
//     setFriends (friend => friend.map(friend =>friend.id === selectedFriend.id? 
//       {...friend, balance: friend.balance + value} : friend));
//       setSelectedFriend(null)
//     console.log(value);
//   }
    
//   function handleAddFriend(friend){
//     setFriends(friends => [...friends, friend]);
//     setAddFriend(false);
//   }
//   function handleClickAddFriend(){
//     setAddFriend (addFriend === false? true : false);
//     setSelectedFriend(null);
//     // another form is using setAddFriend ((show)=> !show)) a call back function
//   }
//   function handleSelection({friend}){
//     // console.log(friend + "handleselecctikon")
//     setSelectedFriend((cur) => cur?.id === friend.id ? null : friend);
//     setAddFriend(false);
//   }
  

//   return (
//     <>
//       <div className='app'>
//         <div className='sidebar'>

//           <FriendList friends = {friends} 
//           onSelection= {handleSelection}
//           selectedFriend = {selectedFriend}/>

//           {addFriend && <FormAddFriend onAddFriend ={handleAddFriend}/>}
//           <Button onClick= {handleClickAddFriend}>{addFriend? "Close":"Add Friend"
//           }</Button>

//         </div>
//         {
//           selectedFriend &&
//         <FormSplitBill selectedFriend = {selectedFriend} onSplitBill ={handleSplitBill}/>
//         }
//       </div>
     
//     </>
//   )
// }







function App() {
  const [addCity, setAddCity] = useState(false)
  const currentDate = new Date();
  
  const [startDate, setStartDate] = useState(currentDate);
  const [selectedOption, setSelectedOption] = useState(null);
  const citys = ["Colonia Caroya", "Jesus Maria", "Sinsacate"];
  const [addNewCity, setAddNewCity] = useState(citys)
  const [selectedCity, setSelectedCity] = useState("Colonia Caroya")
  let newCity;
  
  const [product, setProduct] = useState(producto);
  const [listar, setListar] = useState(false);
  const [categoria, setCategoria] = useState("");
  // Handle onChange event
  const handleOptionChange = (event) => {
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
    console.log (newCity);
  }
 

  function HandleListar(){
    setListar(()=> !listar);
    if  (categoria != "") {
      
    }
    else{
      alert("Debe seleccionar una categoria para listar")
      return
    }
  }
  
  function handleCategorie(e){
    setCategoria(e.target.value);
    console.log(categoria);
  }
 

      // function HandleAgregarProducto(){
    //   console.log ("entro a agregar")
    //   if  (categoria != "") {
    //     return (
    //       <>
    //         <form className='div-city'>
    //           <h2>Produco a Cargar</h2>
    //           {/* <label >Ciudad {selectedCity}  </label>
    //           <label >Fecha {startDate}</label> */}
    //           {console.log("en el return")}
    //         </form>
    //       </>)
    //   }
    //   else{
    //     alert("Debe seleccionar una categoria para cargar")
    //     return
    //   }

        
    // }

    function HandleAgregarProducto() {
      console.log("entro a agregar");
      if (categoria !== "") {
        return (
          <>
            <form className='div-city'>
              <h2>Produco a Cargar</h2>
              {/* <label >Ciudad {selectedCity}  </label>
              <label >Fecha {startDate}</label> */}
              {console.log("en el return")}
            </form>
          </>
        );
      } else {
        alert("Debe seleccionar una categoria para cargar");
        return <div></div>; // Placeholder element when the condition is false
      }
    }
    
  



  return (
    <>
      <header>
        <h1> Find the best Prices </h1>
        <div className='div-city'>
          <h3>Select the city</h3>
          <select>
            <CargarCitys/>
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
             <h3 className='label-option'>Select type of product</h3>
          </div>
          <div className='option-div'>

            <LabelOption value = "Lacteos" checked onSelect ={handleCategorie}>Lacteos</LabelOption>
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

          <button onClick={HandleListar} >{ !listar? "Listar" : "Cerrar listado"}</button>
          <button onClick={HandleAgregarProducto}>Agregar Producto</button>
         
        </div>
      </main>
    </>
  )
}

export default App
