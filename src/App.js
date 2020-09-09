import React from 'react';
import './App.css';
import Header from "./Header"
import Home from "./Home"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
    // BEM Convention
    <Router>
    <div className="app">
      <Switch>
        <Route path="/checkout">
          <h1>I'm a checkout page</h1>
        </Route>
        <Route path="/">
          <Header />
          <Home />
        </Route>
        </Switch>      
    </div>
    </Router>
  );
}

export default App;
