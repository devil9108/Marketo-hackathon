import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { connect } from "react-redux";
import {  Link } from "react-router-dom";
import {getRatingsThunk} from "./Redux/thunk";

class MainPage extends Component {
  render() {
    return (
      <Container className="mx-auto h-10">
        <Row className="m-5">
          <Col md={6} xs={1}>
            <h2>Marketo - Heckathon</h2>
          </Col>
          <Col md={6} className="float-right">
            <h4 className="float-right">
              {this.props.firstName + " " + this.props.lastName}
            </h4>
          </Col>
        </Row>
        <Row>
          {this.props.participents.map((participent, index) => (
            <Col md={4} key={index} className="d-flex align-items-stretch">
              <Card
                as={Link}
                to={`/rating/:${participent.id}`}
                className="m-2 text-center"
                onClick = {()=>this.props.getRatingsThunk(participent.id)}
              >
                <Card.Body>
                  <Card.Title>{participent.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    by {participent.ownerName}
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

let mapStateToProps = state => ({
  participents: state.participents,
  firstName: state.user.firstName,
  lastName: state.user.lastName
});

export default connect(
  mapStateToProps,
  {getRatingsThunk}
)(MainPage);
