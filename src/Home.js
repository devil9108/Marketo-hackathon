import React, { Component } from "react";
import LogIn from "./LogIn";
import MainPage from "./MainPage";

//import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    console.log(this.props.isAutheticated);
    return <div>{this.props.isAutheticated ? <MainPage /> : <LogIn />}</div>;
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
