import React, { useEffect } from "react";
import './App.css';
import {BrowserRouter, Routes,Route}from 'react-router-dom'
import Checkout from './Compoenent/Checkout';
import Home from './Compoenent/Home';
import Login from './Compoenent/Login';
import { auth } from "./Compoenent/Firebase";

import { useStateValue } from "./Compoenent/StateProvider";
function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <BrowserRouter>
    <div className="app">
    
        <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/checkout" exact element={<Checkout/>}/>
            <Route path="/login" exact element={<Login/>}/>
        </Routes>
       
    </div>
    </BrowserRouter>
  );
}

export default App;
