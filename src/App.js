import React from 'react';
import Header from './Components/header'
import Footer from './Components/footer'
import {
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './Components/homePage'
import Support from './Components/supportDialogue'

function App() {
  return (
    <div className="App">
      <Header/>
     <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        
        </Switch>
        <Footer/>
    </div>
  );
}

export default App;
