import React, { useEffect } from 'react';
import './App.css';
import Header from "./Header"
import Home from "./Home"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Checkout from "./Checkout"
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js"
import Orders from "./Orders"

// Applied the Publishable key from Stripe.com
const promise = loadStripe("pk_test_51HPzWbAmXkxEmHuuAxrry96nX24qhFu6u841nwZETpU0uMNXl9oDh5xihFmra27hMCa2imHcKBxF0LBj6ZnRoEwO00ZObQ0Q2o");

function App() {
  const [{}, dispatch] = useStateValue();

useEffect(() => {
  // will only run when the app components loads...
  auth.onAuthStateChanged(authUser => {
    //console.log("THE USER IS >>>", authUser);
    
    if (authUser) {
      // The user is logged in...
      dispatch({
        type: "SET_USER",
        user: authUser
      })
    } else {
      // The user is logge out...
      dispatch({
        type: "SET_USER",
        user: null
      })
    }
  })
}, [])

  return (
    // BEM Convention
    <Router>
    <div className="app">
      <Switch>
        <Route path="/orders">
          <Header />
          <Orders />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/payment">
          <Header />
          <Elements stripe={promise}>
            <Payment />
          </Elements>
        </Route>
        <Route path="/checkout">
          <Header />
          <Checkout />
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
