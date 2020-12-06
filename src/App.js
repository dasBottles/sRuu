import "./App.css";
import { Home, FormPage, Navbar } from "./Components";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";



function App() {
  return (
    <>
    <Router>
      <Navbar />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/commissions" component={FormPage} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
