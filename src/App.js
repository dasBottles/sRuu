import "./App.css";
import { Home, FormPage, Navbar, ColorTest } from "./Components";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";



function App() {
  return (
    <>
    <Router>
      <Navbar />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/commissions" component={FormPage} />
        <Route path="/colortest" component={ColorTest} />

      </Switch>
    </Router>
    </>
  );
}

export default App;
