import React from 'react';
import './App.css';

import NavBar from "./NavBar";
import MainPage from "./MainPage";
import DisplayContent from "./DisplayContent/DisplayContent";
import PlaceOrder from "./PlaceOrder";
import Checkout from './Components/Checkout/Checkout';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import CartContextProvider from './CartContext';

function App() {
  return (
    <Router>
      <div className="App">
            <CartContextProvider>
             <NavBar/>
              <Switch>            
                <Route path="/display">
                    <DisplayContent/>
                </Route>
                <Route path="/order/:id">
                  <PlaceOrder/>
                </Route>
                <Route path="/checkout">
                  <Checkout/>
                </Route>
                <Route path="">
                    <MainPage/>
                </Route>
              </Switch>
            </CartContextProvider>
      </div>
    </Router>
  );
}

export default App;