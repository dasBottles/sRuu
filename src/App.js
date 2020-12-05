import "./App.css";
import { Home, FormPage } from "./Components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



function App() {
  return (
    <Router>
        <nav class="nav flex-column align-items-center">
            <a class='nav-link'> <img src='https://cdn.betterttv.net/emote/5f9a8c436f583802e38a01a1/3x' alt='juliWow'/></a>
            <Link to='/'>
            <a class="nav-link h1">Sleepyruu</a>
            </Link>
            <Link to='/commissions'>
            <a class="nav-link">Form</a>
            </Link>
            <a class="nav-link">Work</a>
        </nav>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/commissions" component={FormPage} />
      </Switch>
    </Router>
  );
}

export default App;
