import "bootstrap/dist/css/bootstrap.min.css";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.scss";
import Index from "./views/index/Index";
import Detail from "./views/detail/Index";
import Login from "./views/login/Login";
import Register from "./views/register/Register";
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";
import Cart from "./views/cart/Cart";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/login">
          {user ? <Redirect to="/" /> : <Login />}
        </Route>

        <Route exact path="/">
          <Index />
        </Route>
        <Route exact path="/detail/:id">
          <Detail />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
