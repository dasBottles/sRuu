import "./App.css";
import { Home, FormPage, Navbar, ColorTest, Weather } from "./Components";
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
        <Route path="/weather" component={Weather} />


      </Switch>
    </Router>
    </>
  );
}

export default App;
