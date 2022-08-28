import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateUserComponent from "./components/CreateUserComponent";
import ViewUserComponent from "./components/ViewUserComponent";
import ListUserComponent from "./components/ListUserComponent";
import ViewOrderComponent from './components/ViewOrderComponent';
import ListOrderComponent from './components/ListOrderComponent';
import UpdateUserComponent from './components/CreateOrderComponent';
import CreateProductComponent from "./components/CreateProductComponent";
import ViewProductComponent from "./components/ViewProductComponent";
import ListProductComponent from "./components/ListProductComponent";
import MainSelect  from "./components/mainselect";
import SearchOrderComponent from "./components/SearchOrderComponent";
import SearchUserComponent from "./components/SearchUserComponent";
import SearchProductComponent from "./components/SearchProductComponent";

function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <Switch>
            <Route path="/" exact component={MainSelect}></Route>
            <Route path="/users" component={ListUserComponent}></Route>
            <Route path="/add-user/:id" component={CreateUserComponent}></Route>
            <Route path="/view-user/:id" component={ViewUserComponent}></Route>
            <Route path = "/orders" component = {ListOrderComponent}></Route>
            <Route path = "/add-order/:id" component = {UpdateUserComponent}></Route>
            <Route path = "/view-order/:id" component = {ViewOrderComponent}></Route>
            <Route path = "/orderSearch" component={SearchOrderComponent}></Route>
            <Route path = "/userSearch" component={SearchUserComponent}></Route>
            <Route path = "/productSearch" component={SearchProductComponent}></Route>
            <Route path="/products" component={ListProductComponent}></Route>
            <Route path="/add-product/:id" component={CreateProductComponent}></Route>
            <Route path="/view-product/:id" component={ViewProductComponent}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
