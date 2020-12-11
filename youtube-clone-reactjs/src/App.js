import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Header';
import RecommendedVideos from './RecommendedVideos';
import SearchPage from './SearchPage';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
      
        <Switch>
          <Route path="/search/:searchTerm" >   
            <div className="app__page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          
          <Route path="/" >            
            <div className="app__page">
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
