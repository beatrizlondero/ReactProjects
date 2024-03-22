import { useState } from 'react'
import Stats from './components/Stats';
import Logo from './components/Logo';
import Form from './components/Form';
import PakingList from './components/pakinglist/pakinglist';

function App() {
  const [items, setItems] = useState([]);
  

  function HandleAddItems(item){
    setItems((items) => [...items, item])
    console.log(items)
  }

  function HandleDeletedItem(id){
    setItems((items) => items.filter((items) =>items.id !== id));
    }

  function HandleToggleItem(id){
    setItems((items) => items.map((items)=> items.id === id ? {...items, packed : !items.packed} : items))
  }

  function HandleClearItems(){
    const confirm = window.confirm("Are you sure you wont to delete all items?")
    if (confirm) setItems([]);
  }
  return (
    <div className='app'>
      <Logo></Logo>
      <Form onAddItems={HandleAddItems}/>
      <PakingList items ={items} onDeleteItem = {HandleDeletedItem} 
      onToggleItem = {HandleToggleItem}
      onClear = {HandleClearItems}/>
      <Stats items = {items}/>
    </div>
  )
}

export default App
