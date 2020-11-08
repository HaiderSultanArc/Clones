import React, {useState, useEffect} from 'react';
import { FormControl, InputLabel, Input, IconButton } from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';

function App() {
  // useState() hook is basically just set a state, it's like declaring a variable
  // useEffect() hook is a block of code that gets executed based on a condition

  const [input, setInput] = useState(''); // We need to connect this State to our Input Field
  const [messages, setMessages] = useState([]); // This state will hold all the messages
  const [username, setUsername] = useState(''); // This state will hold the username

  useEffect(
    () => {
      db.collection('messages').orderBy('timestamp', 'asc').onSnapshot( // db.collection('messages') is fetching the collection with name messages and onSnapshot listner listens to the changes in that collection and snapshot holds that collection
        snapshot => {
          setMessages(snapshot.docs.map(  // snapshot.docs.map() is mapping through all the documents in the collection 'messages'
            doc => ({
              id: doc.id,
              fields: doc.data()
            })
          ))
        }
      )
    }, [] // here is the condition that defines the execution of this block, if it's black then the code runs once (like do while) when the react component (in this case app) loads
  );

  useEffect(
    () => {
      setUsername(prompt('Please Enter your Name'));  // Pop-up a prompt and takes an input
    }, [], // here is the condition that defines the execution of this block, if it's black then the code runs once (like do while) when the react component (in this case app) loads
  );  

  const sendMessage = (event) => {  // All the logic to send a message will be in this function
    event.preventDefault(); // Preventing the page to refresh i.e the default behaviour of the event
    
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    
    setInput('');
  }

  return (
    <div className="App">
      <img className="app__icon" src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" alt="Messenger" />  {/* w=100&h=100 at the end is actually the dimensions of image that we want */}
      <h2>Welcome {username}</h2>

      <div className="app__messagesArea">
        <FlipMove>
          {
            messages.map( // messages.map() will map through all the messages
              ({ id, fields }) => (
                <Message key={id} username={username} fields={fields} /> // key is important when we need to render only the object that has a unique key. By introducing this key React Componenet will only re-render those elements that has unique key
              )
            )
          }
        </FlipMove>
      </div>

      <form className="app__form">  {/* Form can be used to click the button using enter key, changing type of button to submit shall work but forms refresh on submit, we can change that by preventing default behaviour of event */}
        <FormControl className="app__formControl">
          <Input className="app__input" placeholder="Enter a Message..." value={input} onChange={event => setInput(event.target.value)} />  {/* value is set to the state input, onChange is set to the event that firesoff the function setInput that will set the value of state */}

          <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>  {/* Button is disabled when there's no input, type of Button is submit, onClick will fire of the function sendMessage() */}
            <SendIcon />
          </IconButton>

        </FormControl>
      </form>
    </div>
  );
}

export default App;