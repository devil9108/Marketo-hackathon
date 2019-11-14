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
import {getUserDetailsThunk} from './Redux/thunk'

class LogIn extends Component {
  constructor(){
    super();
    this.state={
      userName : ''
    }
  };

  handleChange = (e) => {
     this.setState({
       [e.target.name] : e.target.value
     })
  };

  handleSubmit = (e) =>{
    e.preventDefault();
    let userId = this.state.userName+'@adobe.com';
    console.log(userId);
    this.props.getUserDetailsThunk(userId);
    this.setState({userName:''})
  };

  render() {
    return (
      <Container className="mx-auto">
        <Row className="justify-content-center row1">
          <Col md={6} className="my-auto">
            <Card className="text-center">
              <Card.Img variant="top" src="/Marketo-logo.g/100px180" />
              <Card.Body>
                <Card.Title>Marketo - Hackathon</Card.Title>
                <Card.Text as={Col}>
                  <InputGroup as={Col}>
                    <FormControl
                      placeholder="username"
                      aria-label="userName"
                      name='userName'
                      aria-describedby="basic-addon2"
                      onChange = {this.handleChange}
                    />
                    <InputGroup.Append>
                      <InputGroup.Text id="basic-addon2">
                        @adobe.com
                      </InputGroup.Text>
                    </InputGroup.Append>
                  </InputGroup>
                </Card.Text>
                <Button variant="primary" onClick={this.handleSubmit}>Submit</Button>
                {this.props.error.msg ? <p className='text-anger'>{this.props.error.msg}</p>:''}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

let mapStateToProps = state => ({
  error : state.error
});

let mapActionsToProps = {
  getUserDetailsThunk
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(LogIn);
