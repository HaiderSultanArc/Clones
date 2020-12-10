import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Checkout from "./Checkout";
import { auth } from './firebase';
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import { useStateValue } from './StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();
  
  useEffect(
    () => {
      const unsubscribe = auth.onAuthStateChanged(
        (authUser) => {
          if (authUser) {
            dispatch({
              type: "SET_USER",
              user: authUser
            })
          }
          else {
            dispatch({
              type: "SET_USER",
              user: null
            })
          }
        }
      );
      
      return () => {  // Cleanup Function
        unsubscribe();
      }
      
    }, []
  );
  
  console.log("User is: ", user);
  
  return (
    <Router>    {/* Router is the parent that wraps children and provides functionality to route */}
      <div className="app">
        <Switch>

          <Route path="/checkout" >
            <Header />
            <Checkout />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/">  {/* This is Default Home Page */}
            <Header />
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
