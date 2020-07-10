import React from "react";
import "./App.css";
import Header from "./component/Header";
import Shop from "./component/Shop/Shop";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Review from "./component/Review/Review";
import Inventory from "./component/Inventory/Inventory";
import NotFound from "./component/Not Found/NotFound";
import ProductDetail from "./component/ProductDetail/ProductDetail";
import LogIn from "./component/LogIn/LogIn";
import { AuthContextProvider } from "./component/LogIn/UseAuth";

function App() {
  const user = { name: "koduMia", email: "kodu@chodu@gmail.com" };
  return (
    <div>
      <AuthContextProvider>
        <Header></Header>
        <Router>
          <Switch>
            <Route path="/Shop">
              <Shop></Shop>
            </Route>
            <Route path="/review">
              <Review></Review>
            </Route>
            <Route path="/inventory">
              <Inventory></Inventory>
            </Route>
            <Route exact path="/">
              <Shop></Shop>
            </Route>
            <Route path="/product/:productKey">
              <ProductDetail></ProductDetail>
            </Route>
            <Route path="/logIn">
              <LogIn></LogIn>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
