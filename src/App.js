import React from 'react';
import Header from './Components/header'
import {
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './Components/homePage'

function App() {
  return (
    <div className="App">
      <Header/>
     <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        
        </Switch>
    </div>
  );
}

export default App;
