import React, { Component } from "react";
import "./App.css";
import Home from "../Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { history } from '../../_helpers';
import { alertActions } from '../../_actions';
import  Login  from '../Login';
import  Register  from '../Register';
import  EmployeeList  from '../EmployeeList';
import { PrivateRoute } from '../PrivateRoute';

class App extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    debugger
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }
  render() {
    return (
      <Router>
        <PrivateRoute exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/employeeList" component={EmployeeList} />
      </Router>
    );
  }
}

export default App;
