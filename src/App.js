import { useState,useRef, useEffect } from 'react';
import './App.css';







function App() {

 
  const [todos,setTodos] = useState([])
  const inputRef = useRef()

  useEffect(()=>{
    if(localStorage.getItem("task")){
      const storedList = JSON.parse(localStorage.getItem("task"));
      setTodos(storedList)
    }
  },[])






    const  handleAddToDo = () => {
    
    const text = inputRef.current.value;
    const newItem = {completed: false , text}
    if(text){
      setTodos([...todos, newItem])
      localStorage.setItem("task", JSON.stringify([...todos,newItem]))
    } else {
      return [];
    }
    
    
    
   
  
    
    // const data = localStorage.setItem('data',text)
    console.log(text)
    inputRef.current.value = "";

    // console.log(data)
    

  }

 const handleItemDone = (index) =>{
    
    const newTodos = [...todos]
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos)
    

 }

 const handleItemDelete = (index) => {
      const  newTodos = [...todos];
      newTodos.splice(index,1)
      setTodos(newTodos)
      localStorage.getItem("task",)
}
const clearData = () =>{
    setTodos([]);
    localStorage.removeItem("task")


}
const onKeyPressEnter = (e) =>{
  if(e.keyCode === 13){
    handleAddToDo()
  }
   

}



  return (
    <div className="App">
      <h2 >To Do List</h2>
      <div className='to-do-list-container'>
              <ul>  
                      
                      {todos.map(({text, completed}, index) =>{
                              return (
                              <div className='btnDelete'>
                               
                                <li  className={completed ? "done" : ""}      key={index} onClick={ () =>  handleItemDone(index)}>{text}  </li>
                               
                                <span onClick={ () =>handleItemDelete(index)}>🗑️</span>
                              </div>
                              ) 
                              
                              
                              
                              
                              
                              
                              
                              
                      })}
                    
              </ul>
              
              <input className='inpt'  onKeyUp={onKeyPressEnter}  ref={inputRef}  placeholder='Enter your infos..'  />
              <span className='taskSpan'>{!todos.length? 'No Task' : todos.length === 1?
              "1 task ": todos.length > 1? `${todos.length} tasks` : null
              
              } </span>   
             <div className='btn'>
                <button className='btn_add'  onClick={handleAddToDo}>ADD</button>  {!todos.length? null: 
                <button className='btn_clr' onClick={clearData}>Clear All</button>
      }
      
             </div>

           
              
              
      </div>
     
     
    </div>
  );
}

export default App;
