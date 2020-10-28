import React, {useState, useEffect} from 'react';
import './App.css';
import Post from './Post';
import {auth, db} from './firebase';
import {makeStyles} from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal';
import { Button, Input } from '@material-ui/core';


// This all material UI styling copied from Site
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
  
  const classes = useStyles(); // makeStyles() Hook that gives us access to all 
  const [modalStyle] = useState(getModalStyle); // This is a State (short term memory store in React)

  const [posts, setPosts] = useState([]); // This is a State, posts is the name of the state and it's value is set using setPosts
  const [open, setOpen] = useState(false);  // This is a State
  const [openSignIn, setOpenSignIn] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => { // It's a listener that listens for any change happen to the front-end states (In this case user and username)
    const unsubscribe = auth.onAuthStateChanged((authUser) => { // It's a listener that listens for any single time, any authentication change happens at the backend
      if (authUser) {
        // User has Logged In
        console.log(authUser);
        setUser(authUser);
      }
      else {
        // User has Logged Out
        setUser(null);
      }
    })

    return () => {  // This basically saves duplication of listener auth.onAuthStateChanged(), which is a backend listener, while useEffect is a front-end listener.
      // perform some clean actions
      unsubscribe();
    }

  }, [user, username]);

  // useEffect -> Runs a piece of code based on a specific condition
  useEffect(() => {
    // db.collections has all the collections on firebase of this application
    db.collection('posts').onSnapshot(snapshot => {
      // onSnapshot() is a very powerful listener, every single time a document is modified or updated it works like a camera and takes a snapshot of the changes
      setPosts(snapshot.docs.map(doc => ({  // setPosts is used to update the state posts. from the snapshots get docs and loop through it and get access to all the docs. doc.data() here data() is the properties of the object (username, caption, imageUrl)
        id: doc.id,
        post: doc.data()
      })))
    });

  }, [])  // Empty braces means code runs one time and if a variable is written it will load everytime that variable is changed

  const signUp = (event) => {
    event.preventDefault(); // It prevents the default behaviour of the event, that is reloading

    auth.createUserWithEmailAndPassword(email, password).then((authUser) => {
      return authUser.user.updateProfile({
        displayName: username
      })
    }).catch((error) => alert(error.message));
  }

  const signIn = (event) => {
    event.preventDefault();

    auth.signInWithEmailAndPassword(email, password).catch((error) => alert.message);
  }

  return (
    <div className="app">
      <Modal open={open} onClose={() => setOpen(false)}>
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

            <Input placeholder="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <Input placeholder="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

            <Button type="submit" onClick={signIn}>Sign In</Button>
          </form>
        </div>
      </Modal>

      <div className="app__header">
        <img className="app__headerImage" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="" />
      </div>

      {user ? (
        <Button onClick={() => auth.signOut()}>Logout</Button>
      ): (
        <div className="app__loginContainer">
          <Button onClick={() => setOpenSignIn(true)}>Sign In</Button>
          <Button onClick={() => setOpen(true)}>Sign Up</Button>
        </div>
      )}

      <h1>HAIDER SULTAN, Let's Build an Instagram Clone with React ⚛</h1>

      {
        // map() will loop through all the objects of posts and set the object to post i.e post = posts.object[i]
        posts.map(({id, post}) => (
          <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />  // key = {id} here basically tells react that only to render the object with that specific key, so it will not render all the old objects just for one single object
        ))
      }

    </div>
  );
}

export default App;
