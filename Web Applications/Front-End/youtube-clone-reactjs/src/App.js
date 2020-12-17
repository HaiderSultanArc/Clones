import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Header';
import RecommendedVideos from './Home/JS/RecommendedVideos';
import Sidebar from './Home/JS/Sidebar';
import SearchPage from './Search/JS/SearchPage';

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
