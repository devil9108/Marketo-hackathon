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
  ButtonGroup
} from "react-bootstrap";

class Marks extends Component {
  constructor() {
    super();
    this.state = {
      design: 1,
      presentation: 1,
      overall: 1
    };
  }

  onChangeValue = e => {
    e.preventDefault();
    this.setState({
      design: e.target["design"].value,
      presentation: e.target["presentation"].value,
      overall: e.target["overall"].value
    });
    console.log(this.state);
  };

  renderDropdown = attr => {
    return (
      <div className="d-flex flex-column">
        <ButtonGroup size="sm" className="mt-3 ">
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>10</Button>
        </ButtonGroup>
      </div>
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
                <Form onSubmit={this.onChangeValue}>
                  <ListGroupItem>
                    <h6 className="d-inline-block">Design</h6>{" "}
                    {this.renderDropdown("design")}
                  </ListGroupItem>
                  <ListGroupItem>
                    <h6 className="d-inline-block">Presentation</h6>{" "}
                    {this.renderDropdown("presentation")}
                  </ListGroupItem>
                  <ListGroupItem>
                    <h6 className="d-inline-block">Overall</h6>{" "}
                    {this.renderDropdown("overall")}
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
