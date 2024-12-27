import React from "react";

import {BrowserRouter, Route, Switch} from "react-router-dom"

import './App.css';
import Home from "./components/Home"
import JetBlackAluminium from './components/JetBlackAluminium';
import Header from "./components/Header";
import SilverTaitanium from "./components/SilverTaitanium"
import SilverAliminum from "./components/SilverAliminium"

function App() {


  return (
    // <Home />

    // <JetBlackAluminium />
    // <SilverTaitanium />
    <>
      
      <BrowserRouter>
      <Header />
        <Switch>
          <Route exact path="/" component= {Home} />
          <Route exact path= "/jetblackaluminium" component={JetBlackAluminium} />
          <Route exact path= "/silverTaitanium" component={SilverTaitanium} />
          <Route exact path = "/silverAliminum" component={SilverAliminum} />
        </Switch>
      </BrowserRouter>
    </>

  );
}

export default App;
