import "./App.scss";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-credit-cards/es/styles-compiled.css";
import Home from "./comps/home";
import Dashboard from "./comps/Dashboard";
import Navigation from "./Navbar";
import NotFound from "./comps/404";


function App() {
  return (
    <div className="App">
     <Router>
       <Navigation/>
       <Switch>
         <Route exact path="/" component={Home}/>
         <Route exact path="/account" component={Dashboard}/>
         <Route component={NotFound}/>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
