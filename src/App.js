import './App.css';

import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom"

import Footer from './components/Footer'
import Home from "./components/Home"
import ProductDetail from './components/ProductDetail'
import Notification from './components/Notification'
const App = () => (
    <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>

      <hr />

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
        <Route path="/about">
          <ProductDetail />
        </Route>
        <Route path="/dashboard">
          <Notification />
        </Route>
      </Switch>
    </div>
    <Footer />
  </Router>
)

export default App;
