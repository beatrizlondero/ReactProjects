import { useState } from 'react'

import './App.css'

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function FriendList({friends, onSelection, selectedFriend}){

  
  return(
    <ul>
      {friends.map( (friend) => (
       <Friend friend = {friend} key = {friend.id} 
       onSelection = {onSelection}
       selectedFriend= {selectedFriend}/>)) }
    </ul>
  )
}

function Friend({friend, onSelection, selectedFriend}){
    
  const isSelected = selectedFriend?.id === friend.id;
  return(
    <li className={isSelected? 'selected':""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance <0 && <p className='red'> You owe {friend.name} ${Math.abs(friend.balance)}</p>}
      {friend.balance >0 && <p className='green'> Your friend {friend.name} owes you ${friend.balance}</p>}
      {friend.balance ===0 && <p className=''> You and {friend.name} are even</p>}
      <Button onClick ={()=> onSelection({friend})}>{isSelected? 'Close':'Select'}</Button>
    </li>
  )
}

function FormAddFriend({onAddFriend}){
  const [name, setName] = useState("")
  const [image, setImage] = useState("https://i.pravatar.cc/48")
  
  function handleSubmit(e){
    e.preventDefault();

    if(!name || !image) return;
    const id = crypto.randomUUID();
    const newFriend ={
      id,
      name,
      image: `${image}?=${id}`,
      balance:0,
    };
    onAddFriend(newFriend);
    
    setName("");
    setImage("https://i.pravatar.cc/48");
  }

    return(
      <form className='form-add-friend' onSubmit={handleSubmit}>
        <label>🤼‍♀️Friend Name: </label>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
        <label>🖼️ Image URL: </label>
        <input type='text' value={image} onChange={(e) => setImage(e.target.value)}/>
        <Button>Add Friend</Button>
       
      </form>
    )
}

function Button({children, onClick}){

   return <button className='button' onClick={onClick}>{children}</button>  

}


function FormSplitBill({selectedFriend, onSplitBill}){
  const [billValue, setBillValue] = useState("");
  const [yourExpense, setYourExpense] = useState("");
  const [optionPaid, setOptionPaid] = useState("you")
  const calculateFriendBill = billValue ? billValue - yourExpense : "";
 
  function handleSplitBillSubmit(e){
    e.preventDefault();
    if (!billValue || !yourExpense) return;
    onSplitBill(optionPaid === "you" ? calculateFriendBill :  -yourExpense)

  }
  
  return(
    <form className='form-split-bill' onSubmit={handleSplitBillSubmit}>
      <h2>SPLIT A BILL WITH {selectedFriend.name}</h2>
      <label>💵 Bill value :$ </label>
      <input type='text' value={billValue} onChange={(e) => setBillValue(Number(e.target.value)) }/>
      
      <label>🕴️Your expense: </label>
      <input type='text' value={yourExpense} onChange={ (e) => setYourExpense (Number(e.target.value)>billValue ?
         yourExpense : Number(e.target.value)) }/>  
      
      <babel>🤼‍♀️ {selectedFriend.name}'s expense: </babel>
      <input type='text' disabled value={calculateFriendBill} /> 
      
      <label>🤑  Who is paying the bill?</label>
      <select value={optionPaid} onChange={(e) => setOptionPaid(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>

      </select>
      
      <Button>Split Bill</Button>
    </form>
  )
}


function App() {
  const [addFriend, setAddFriend] = useState(false)
  const [friends, setFriends] = useState (initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleSplitBill(value){
    setFriends (friend => friend.map(friend =>friend.id === selectedFriend.id? 
      {...friend, balance: friend.balance + value} : friend));
      setSelectedFriend(null)
    console.log(value);
  }
    
  function handleAddFriend(friend){
    setFriends(friends => [...friends, friend]);
    setAddFriend(false);
  }
  function handleClickAddFriend(){
    setAddFriend (addFriend === false? true : false);
    setSelectedFriend(null);
    // another form is using setAddFriend ((show)=> !show)) a call back function
  }
  function handleSelection({friend}){
    // console.log(friend + "handleselecctikon")
    setSelectedFriend((cur) => cur?.id === friend.id ? null : friend);
    setAddFriend(false);
  }
  

  return (
    <>
      <div className='app'>
        <div className='sidebar'>

          <FriendList friends = {friends} 
          onSelection= {handleSelection}
          selectedFriend = {selectedFriend}/>

          {addFriend && <FormAddFriend onAddFriend ={handleAddFriend}/>}
          <Button onClick= {handleClickAddFriend}>{addFriend? "Close":"Add Friend"
          }</Button>

        </div>
        {
          selectedFriend &&
        <FormSplitBill selectedFriend = {selectedFriend} onSplitBill ={handleSplitBill} key={selectedFriend.id}/>
        }
      </div>
     
    </>
  )
}

export default App
