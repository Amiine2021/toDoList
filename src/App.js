import { useState,useRef } from 'react';
import './App.css';

function App() {

  const [todos,setTodos] = useState([])
  const inputRef = useRef()


  const  handleAddToDo = () => {
    const text = inputRef.current.value;
    const newItem = {completed: false , text}
    setTodos([...todos, newItem])
    inputRef.current.value = "";
    console.log(text)
    

  }
 const handleItemDone = (index) =>{

    const newTodos = [...todos]
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos)
    console.log(newTodos)

 }

 const handleItemDelete = (index) => {
      const  newTodos = [...todos];
      newTodos.splice(index,1)
      setTodos(newTodos)



 }


  return (
    <div className="App">
      <h2 className='doList'>To Do List</h2>
      <div className='to-do-list-container'>
              <ul>  
                      
                      {todos.map(({text, completed}, index) =>{
                              return (
                              <div className='btnDelete'>
                                   
                                <li  className={completed ? "done" : ""}                  key={index} onClick={ () =>  handleItemDone(index)}>{text}  </li>
                                <span onClick={ () =>handleItemDelete(index)}>❌ </span>
                              </div>) 
                              
                              
                              
                              
                              
                              
                              
                              
                      })}
                    
              </ul>
                    
              <input ref={inputRef}  placeholder='Enter your infos..'  />
              
              <button className='btnAdd' onClick={handleAddToDo}>ADD</button>
      </div>
      
     
    </div>
  );
}

export default App;
