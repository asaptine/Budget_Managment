import React, {useState} from "react";
import { BrowserRouter as Router, Redirect, Route, Switch,  } from "react-router-dom";

import Statistics from './components/Statistics/Statistics';
import Navbar from "./Shared/Navigation/Navbar";
import Transactions from './components/Transactions/Transactions'

import "./App.css";
function App() {
 
  return (
    <Router>
      <Navbar />
      <Switch>
      <Route path="/" exact>
        <Transactions ></Transactions>
      </Route>
      <Route path="/statistics" exact>
        <Statistics></Statistics>
      </Route>
      <Redirect to="/"></Redirect>
      </Switch>
    </Router>
  );
}

export default App;
