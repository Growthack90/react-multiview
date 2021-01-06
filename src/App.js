import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { NavBar } from "./shared/NavBar";
import { Catalog, Product} from "./views/catalog/Catalog";

import './App.css';

const HomeView = () => <div>HomeView</div>
const AnotherView = () => <div>AnotherView</div>
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Route exact path="/" component={HomeView} />
          <Route exact path="/another" component={AnotherView} />
          <Route exact path="/catalog" component={Catalog} />
          <Route exact path="/product/:id" component={Product} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
