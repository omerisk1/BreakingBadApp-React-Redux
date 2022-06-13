import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Detail from "./pages/Details";
import Home from './pages/Home/HomePage'


function App() {
  return (
   
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}>
            </Route>
            <Route path="/char/:char_id" component={Detail}>
            </Route>
          </Switch>
        </Router>
        
      </div>
    
  );
}

export default App;

