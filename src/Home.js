import React, { Component } from "react";
import LogIn from "./LogIn";
import MainPage from "./MainPage";
import Marks from "./Marks";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    console.log(this.props.isAutheticated);
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            {this.props.isAutheticated ? <MainPage /> : <LogIn />}
          </Route>
          <Route exact path="/rating/:ideaId">
            {this.props.isAutheticated ? <Marks /> : <Redirect to="/" />}
          </Route>
        </Switch>
      </Router>
    );
  }
}

let mapStateToProps = state => ({
  isAutheticated: state.isAutheticated
});

let mapActionsToProps = {};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Home);

{
  /* <div>{this.props.isAutheticated ? <MainPage /> : <LogIn />}</div> */
}
