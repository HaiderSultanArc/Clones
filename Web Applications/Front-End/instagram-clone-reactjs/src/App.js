import { Button, Input } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import './App.css';
import { auth } from './firebase';
import ImageUpload from './ImageUpload';
import Posts from './Posts';


function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
  const [user, setUser] = useState(null); // User State is initialized with a default value of null
  const classes = useStyles(); // makeStyles() Hook that gives us access to all 
  const [modalStyle] = useState(getModalStyle); // This is a State (short term memory store in React)
  const [openSignUp, setOpenSignUp] = useState(false);  // This is a State
  const [openSignIn, setOpenSignIn] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const signUp = (event) => {
    event.preventDefault(); // It prevents the default behaviour of the event, that is reloading

    auth.createUserWithEmailAndPassword(email, password).then(
      (createUser) => { // createUserWithEmailAndPassword() Creates a User with Email and Password then return updated Profile and also catch any errors
        return createUser.user.updateProfile(
          { 
            displayName: username // Updated Username
          }
        )
      }
    ).catch(
      (error) => alert(error.message)
    );  // If any error happens it will display an error

    setOpenSignUp(false); // Closes the openSignUp modal
  }

  const signIn = (event) => {
    event.preventDefault(); // It prevents the default behaviour of the event, that is reloading

    auth.signInWithEmailAndPassword(email, password).catch(
      (error) => alert(error.message)
    ); // Creates a User with Email and Password then return updated Profile and also catch any errors. If any error happens it will display an error
    
    setOpenSignIn(false); // Closes the openSignIn model
  }

  return (
    <div className="app">
      <Modal open={openSignUp} onClose={() => setOpenSignUp(false)}>
        <div style={modalStyle} className={classes.paper}>
          <form className="app__signup">
            <center>
              <img className="app__headerImage" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="" />
            </center>

            <Input placeholder="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <Input placeholder="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

            <Button type="submit" onClick={signUp}>Sign Up</Button> 
          </form>
        </div>
      </Modal>

      <Modal open={openSignIn} onClose={() => setOpenSignIn(false)}>
        <div style={modalStyle} className={classes.paper}>
          <form className="app__signup">
            <center>
              <img className="app__headerImage" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="" />
            </center>

            <Input placeholder="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

            <Button type="submit" onClick={signIn}>Sign In</Button>
          </form>
        </div>
      </Modal>

      <div className="app__header">
        <img className="app__headerImage" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="" />
        
        {
          user ? (
            <Button onClick={() => auth.signOut()}>Logout</Button>
          ) : (
              <div className="app__loginContainer">
                <Button onClick={() => setOpenSignIn(true)}>Sign In</Button>
                <Button onClick={() => setOpenSignUp(true)}>Sign Up</Button>
              </div>
            )
        }
      </div>
      
      <Posts user={user} setUser={setUser} />

      {
        user?.displayName ? (  // user? is an optional, it says if user don't exist then don't apply this condition
          <ImageUpload username={user.displayName} /> // Render the ImageUpload
        ) : (
          <h3>Sorry you need to Login to Upload</h3>  // If user is not logged in then print a msg
        )
      } 
    </div>
  );
}

export default App;