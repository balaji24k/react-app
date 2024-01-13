import './App.css';
import { Switch, Route, NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Login from './components/Login';
import Signup from './components/Signup';
import AfterLogin from './components/AfterLogin';

function App() {
  return (
    <div>
      <NavLink to="/login">
        Login
      </NavLink>
      <NavLink to="/signup">
        Signup
      </NavLink>
      <Switch>
        <Route exact path="/">
          <Login/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/signup">
          <Signup/>
        </Route>
        <Route exact path="/afterLogin">
          <AfterLogin/>
        </Route>
      </Switch>
    </div>
    
  );
}

export default App;
