import React,{useEffect,useState} from 'react';
import { db } from '../firebase_config';
import TodoList from './TodoList';

function GetTodos() {
    const [todos, setTodos] = useState([])
    
    useEffect(() => {
        getTodos();
        console.log(todos);
     }, []);

      const getTodos =()=>{
        db.collection("todos").onSnapshot( function(querySnapshot){
            setTodos(
              querySnapshot.docs.map((doc) => ({
                id:doc.id,
                todo: doc.data().todo,
                inprogress: doc.data().inprogress,
              }))
            );
          });
      }


    return(
        <div>
          <div style={{ marginTop:"24px"}}>
            {todos.map((todo,i) => (
                <div key={i}>
                    <TodoList  id={todo.id} todo={todo.todo} inprogress={todo.inprogress} />
                </div>
            
            ))}
           </div>
        </div>
    )
  }
  export default GetTodos;