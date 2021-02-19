import './App.css';

import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom"

import Footer from './components/Footer'
import Home from "./components/Home"
import ProductDetail from './components/ProductDetail'
import Notification from './components/Notification'
import AllProducts from './components/AllProducts'
import Header from './components/Header'
const App = () => (
    <Router>
      <Header />
      {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/detail/*">
          <ProductDetail />
        </Route>
        <Route path="/all-products">
          <Notification />
          <AllProducts />
        </Route>
        <Route exact path="/detail/1">
          <ProductDetail />
        </Route>
      </Switch>
    <Footer />
  </Router>
)

export default App;
