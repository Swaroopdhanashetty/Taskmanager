import { useState} from 'react';
import { Button, TextField } from '@material-ui/core';
import { db } from '../firebase_config';
import firebase from "firebase";
import GetTodos from './GetTodos'

function AddTodos({handleLogout}) {

  const [todoInput, setTodoInput] = useState("");

  function addTodo(e){
    e.preventDefault();

    db.collection("todos").add({
      inprogress: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput,
    });
    setTodoInput("");

  }
  return (
    <div 
    style = {{ 
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center"
      }}
    >
        <nav><Button onClick={handleLogout}>Logout</Button></nav>
      <div>
        <h1>Task Manager AddTodos</h1>
          <form>
            <TextField 
            id="standard-basic"
            label="Write a Todo"
            value = {todoInput}
            onChange={ (e) => setTodoInput (e.target.value)}
            style={{maxWidth:"300px", width:'90vw'}} />
            <Button type="submit" color="primary" variant="contained" onClick={addTodo}>
             Add Task
            </Button>
          </form>
          <GetTodos />
      </div>
    </div>
  );
}

export default AddTodos;
