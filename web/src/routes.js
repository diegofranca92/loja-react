import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated } from "./services/auth";

import {SignUp} from './components/Acesso/SignUp'
import {SignIn} from './components/Acesso/SignIn'
import {AddItem} from './components/Home/AddItem'
import {EditItem} from './components/Home/EditItem'
import {Home} from './components/Home/Home'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={SignIn} exact />
        <Route path="/signup" component={SignUp} exact />
        <PrivateRoute path="/home" component={Home} exact />
        <Route path="/add" component={AddItem} exact />
        <Route path="/edit/:id" component={EditItem} exact />
        <Route path="*" component={() => <h1>Página não encontrada</h1>} />
      </Switch>
    </BrowserRouter>
  );

  export default Routes;