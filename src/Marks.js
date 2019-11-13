import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
  Form,
  Button,
  ToggleButtonGroup,
  ButtonToolbar,
  ToggleButton
} from "react-bootstrap";

class Marks extends Component {
  constructor() {
    super();
    this.state = {
      design: 0,
      innovation: 0,
      bussiness: 0,
      solution: 0,
      working: 0,
      presentation: 0,
      comments:''
    };
  }

  onChangeValue = e => {
    let selected = e.target.name;
    this.setState({
      [selected] : e.target.value
    });
    console.log(this.state);
  };

  renderDropdown = attr => {
    return (
      <ButtonToolbar className="d-flex flex-column">
        <ToggleButtonGroup size="sm" className="mt-3" type = 'radio' name={attr} onClick={this.onChangeValue}>
          <ToggleButton variant="outline-dark" value='1'>1</ToggleButton>
          <ToggleButton variant="outline-dark" value='2'>2</ToggleButton>
          <ToggleButton variant="outline-dark" value='3'>3</ToggleButton>
          <ToggleButton variant="outline-dark" value='4'>4</ToggleButton>
          <ToggleButton variant="outline-dark" value='5'>5</ToggleButton>
          <ToggleButton variant="outline-dark" value='6'>6</ToggleButton>
          <ToggleButton variant="outline-dark" value='7'>7</ToggleButton>
          <ToggleButton variant="outline-dark" value='8'>8</ToggleButton>
          <ToggleButton variant="outline-dark" value='9'>9</ToggleButton>
          <ToggleButton variant="outline-dark" value='10'>10</ToggleButton>
        </ToggleButtonGroup>
      </ButtonToolbar>
    );
  };
  render() {
    return (
      <Container className="mx-auto">
        <Row className="justify-content-center">
          <Col md={6} className="my-auto">
            <Card>
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
              <Card.Body>
                <Card.Title className="d-inline block">Marketo</Card.Title>
                <Card.Title className="d-inline block float-right">
                  UserName
                </Card.Title>
                <Card.Text className="text-center">Team Name</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <Form>
                  <ListGroupItem>
                    <h6 className="d-inline-block">1.Design</h6>{" "}
                    {this.renderDropdown("design")}
                  </ListGroupItem>
                  <ListGroupItem>
                    <h6 className="d-inline-block">2.Innovation & Advancement</h6>{" "}
                    {this.renderDropdown("innovation")}
                  </ListGroupItem>
                  <ListGroupItem>
                    <h6 className="d-inline-block">3.Bussiness Implication of Idea</h6>{" "}
                    {this.renderDropdown("bussiness")}
                  </ListGroupItem>
                  <ListGroupItem>
                    <h6 className="d-inline-block">4.Solution Approach And Architecture</h6>{" "}
                    {this.renderDropdown("solution")}
                  </ListGroupItem>
                  <ListGroupItem>
                    <h6 className="d-inline-block">5.Working Demo Of Idea</h6>{" "}
                    {this.renderDropdown("demo")}
                  </ListGroupItem>
                  <ListGroupItem>
                    <h6 className="d-inline-block">6.Presentation And Demonstration</h6>{" "}
                    {this.renderDropdown("presentation")}
                  </ListGroupItem>
                  <ListGroupItem>
                    <h6 className="d-inline-block">7.Things that impressed you about this team.</h6>{" "}
                    <Form.Group controlId="comments" name='comments' onChange={this.onChangeValue}>
                      <Form.Control as="textarea" rows="3" placeHolder='Enter Your Answer Here...' />
                    </Form.Group>
                  </ListGroupItem>
                  <Card.Link as={Button} type="submit" className="float-right">
                    Submit
                  </Card.Link>
                </Form>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Marks;
