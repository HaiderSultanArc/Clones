import React, {useState, useEffect} from 'react';
import './App.css';
import Post from './Post';
import {auth, db} from './firebase';
import {makeStyles} from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal';
import { Button, Input } from '@material-ui/core';
import ImageUpload from './ImageUpload';
import InstagramEmbed from 'react-instagram-embed';


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
  const [openSignUp, setOpenSignUp] = useState(false);  // This is a State
  const [openSignIn, setOpenSignIn] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null); // User State is initialized with a default value of null

  useEffect(() => { // It's a listener that listens for any change happen to the front-end states (In this case user and username)
    const unsubscribe = auth.onAuthStateChanged((authUser) => { // onAuthStateChanged() is a listener that listens for any single time, any authentication change happens at the backend
      if (authUser) { // If User is authenticated
        // User has Logged In
        console.log(authUser);
        setUser(authUser);
      }
      else {  // If User is not authenticated or logged out ("de-authenticated")
        // User has Logged Out
        setUser(null);
      }
    })

    return () => {  // This basically saves duplication of listener auth.onAuthStateChanged(), which is a backend listener, while useEffect is a front-end listener.
      // perform some cleanup actions so it does'nt spam
      unsubscribe();
    }

  }, []);

  // useEffect -> Runs a piece of code based on a specific condition
  useEffect(() => {
    // db.collections has all the collections on firebase of this application
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {  // Go to the posts collection in firebase database in order of timestamp and get a snapshot of each document
      // onSnapshot() is a very powerful listener, every single time a document is modified or updated it works like a camera and takes a snapshot of the changes
      setPosts(snapshot.docs.map(doc => ({  // setPosts is used to update the state posts. Map through all the documents and get their snapshot
        id: doc.id, // ID of the document on the Firebase
        post: doc.data()  // Data of the Document on the Firebase
      })))
    });

  }, [])  // Empty braces means code runs one time and if a variable is written it will load everytime that variable is changed

  const signUp = (event) => {
    event.preventDefault(); // It prevents the default behaviour of the event, that is reloading

    auth.createUserWithEmailAndPassword(email, password).then((createUser) => { // createUserWithEmailAndPassword() Creates a User with Email and Password then return updated Profile and also catch any errors
      return createUser.user.updateProfile({ 
        displayName: username // Updated Username
      })
    }).catch((error) => alert(error.message));  // If any error happens it will display an error

    setOpenSignUp(false); // Closes the openSignUp modal
  }

  const signIn = (event) => {
    event.preventDefault(); // It prevents the default behaviour of the event, that is reloading

    auth.signInWithEmailAndPassword(email, password).catch((error) => alert(error.message)); // Creates a User with Email and Password then return updated Profile and also catch any errors. If any error happens it will display an error
    
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

      <div className="app__posts">
        <div className="app__postsLeft">
          {
            // map() will loop through all the objects of posts and set the object to post i.e post = posts.object[i]
            posts.map(({ id, post }) => (
              <Post key={id} postId={id} user={user} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />  // key = {id} here basically tells react that only to render the object with that specific key, so it will not render all the old objects just for one single object
            ))
          }
        </div>

        <div className="app__postsRight">
          <InstagramEmbed
            url='https://instagr.am/p/Zw9o4/'
            maxWidth={320}
            hideCaption={false}
            containerTagName='div'
            protocol=''
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
          />
        </div>
      </div>

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