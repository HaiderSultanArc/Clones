import React, {useState, useEffect} from 'react';
import './App.css';
import Post from './Post';
import { db } from './firebase';

function App() {
  // This is a State (short term memory store in React)
  // posts is the name of State, to set a value we use setPosts
  // This syntax is standard in React
  const [posts, setPosts] = useState([]);

  // useEffect -> Runs a piece of code based on a specific condition
  useEffect(() => {
    // This is where code runs
    db.collection('posts').onSnapshot(snapshot => {
      // onSnapshot() is a very powerful listener, every single time a document is modified or updated it works like a camera and takes a snapshot of the changes
      setPosts(snapshot.docs.map(doc => doc.data())) // setPosts is used to update the state posts. from the snapshots get docs and loop through it and get access to all the docs. doc.data() here data() is the properties of the object (username, caption, imageUrl)
    })

  }, []) // Empty braces means code runs one time

  return (
    <div className="app">
      <div className="app__header">
        <img className="app__headerImage" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="" />
      </div>

      <h1>HAIDER SULTAN, Let's Build an Instagram Clone with React ⚛</h1>

      {
        // map() will loop through all the objects of posts and set the object to post i.e post = posts.object[i]
        posts.map(post => (
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        ))
      }

    </div>
  );
}

export default App;
