import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  InputGroup,
  FormControl
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

import { connect } from "react-redux";

class LogIn extends Component {
  render() {
    return (
      <Container className="mx-auto">
        <Row className="justify-content-center row1">
          <Col md={6} className="my-auto">
            <Card className="text-center">
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Marketo - Hackathon</Card.Title>
                <Card.Text>
                  <InputGroup as={Col}>
                    <FormControl
                      placeholder="username"
                      aria-label="username"
                      aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                      <InputGroup.Text id="basic-addon2">
                        @adobe.com
                      </InputGroup.Text>
                    </InputGroup.Append>
                  </InputGroup>
                </Card.Text>
                <Button variant="primary">Log - In</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

let mapStateToProps = state => ({});

let mapActionsToProps = {};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(LogIn);
