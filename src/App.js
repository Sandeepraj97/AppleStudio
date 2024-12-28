import React from "react";

import {BrowserRouter, Route, Switch} from "react-router-dom"

import './App.css';
import Home from "./components/Home"
import JetBlackAluminium from './components/JetBlackAluminium';
import SilverTaitanium from "./components/SilverTaitanium"
import SilverAliminum from "./components/SilverAliminium"

const App = () => (
    // <Home />

    // <JetBlackAluminium />
    // <SilverTaitanium />
    <>
      
      <BrowserRouter>
      
        <Switch>
          <Route exact path="/" component= {Home} />
          <Route  path= "/jetblackaluminium" component={JetBlackAluminium} />
          <Route  path= "/silverTaitanium" component={SilverTaitanium} />
          <Route  path = "/silverAliminum" component={SilverAliminum} />
        </Switch>
      </BrowserRouter>
    </>

  );


export default App;
