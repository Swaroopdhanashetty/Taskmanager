import React, { useEffect, useState } from 'react'
import AddTodos from './components/AddTodos';
import SignLog from './SignLog'
import { firebaseAuth } from './firebase_config';
import "./App.css";

function App() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState(''); 
  const [hasAcc, setHasAcc] = useState(false);

  const clearInputs =()=> {
    setEmail('');
    setPassword('');
  }

  const clearErrors =()=> {
    setEmailError('');
    setPasswordError('');
  }
  const handleLogin =()=>{
    clearErrors();
    console.log("you clicked");
    firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        console.log(err.code);
        console.log(err.message);
        switch(err.code){
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            console.log(emailError);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
            default:  console.log(`Sorry, we are out of service`);
        }
      })
      .then((e) => console.log(e));
  };

  const handleSignUp =() =>{
    clearErrors();
    console.log("signUp");

    firebaseAuth
    .createUserWithEmailAndPassword(email, password)
    .catch((err) => {
      switch(err.code){
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(err.message);
          break;
        case "auth/weak-password":
          setPasswordError(err.message);
          break;
          default:  console.log(`Sorry, we are out of service`);
      }
    });
  }

  const handleLogout =()=> {
    firebaseAuth.signOut();
  }
  const authListener =()=> {
    firebaseAuth.onAuthStateChanged((user) => {
      if(user){
        clearInputs();
        console.log("login");
        setUser(user)
      }else{
        setUser('');
      }
    });
  }

  useEffect(() => {
    authListener();
  });

  return (
    <div>
      {user ? (
       <AddTodos handleLogout={handleLogout} />

      ):(
        <SignLog
         email={email} 
         setEmail={setEmail} 
         password={password} 
         setPassword={setPassword}
         handleLogin={handleLogin}
         handleSignUp={handleSignUp}
         hasAcc={hasAcc}
         setHasAcc={setHasAcc}
         emailError={emailError}
         passwordError={passwordError}
          />
      )}
      
      
    </div>
  )
}

export default App
