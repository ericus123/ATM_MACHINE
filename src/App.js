import "bootstrap/dist/css/bootstrap.min.css";
import "react-credit-cards/es/styles-compiled.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.scss";
import Navigation from "./Navbar";
import NotFound from "./comps/404";
import Dashboard from "./comps/Dashboard";
import Home from "./comps/home";


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/account" component={Dashboard} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
