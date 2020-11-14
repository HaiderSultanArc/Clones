import './App.css';
import Header from "./Header";
import Home from "./Home";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>    {/* Router is the parent that wraps children and provides functionality to route */}
      <div className="app">
        <Switch>

          <Route path="/checkout" >
            <Header />
            <h1>CHECHOUT</h1>
          </Route>

          <Route path="/login">
            <Header />
            <h1>LOGIN</h1>
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
