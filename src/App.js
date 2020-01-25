import React from 'react';
import Header from './Components/header'
import Footer from './Components/footer'
import {
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './Components/homePage'
import View from './Components/ViewPage'
import Info from './Components/viewDetails'


function App() {
  return (
    <div className="App">
      <Header/>
     <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/view">
            <View/>
          </Route>
          <Route exact path="/info">
            <Info/>
          </Route>
        
        </Switch>
        <Footer/>
    </div>
  );
}

export default App;
