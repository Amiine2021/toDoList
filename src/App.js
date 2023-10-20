import { useState,useRef } from 'react';
import './App.css';

function App() {

  const [todos,setTodos] = useState([])
  const inputRef = useRef()


  function handleAddToDo(){
    const text = inputRef.current.value;
    setTodos([...todos, text])
    inputRef.current.value = "";
    console.log(text)
    

  }
 


  return (
    <div className="App">
      <h1>To Do List</h1>
      <ul>
        
        {todos.map((item) =>{
                return <li>{item}  <button id='delete' style={{
                  color:"red",
                  alignItems:"center"
                }}>X</button></li>
        })}
       
      </ul>
      
      <input ref={inputRef}  placeholder='Enter your infos..'  />
      <button onClick={handleAddToDo}>Add</button>
     
    </div>
  );
}

export default App;
