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
import { connect } from "react-redux";

import {uploadRatingsThunk} from './Redux/thunk';

class Marks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ideaId: this.props.ratings.ideaId,
      reviewerEmail: this.props.emailAddress,
      ratings: this.props.ratings.rating,
      comments: this.props.ratings.comments
    };
  }

  onChangeValue = e => {
    let selected = e.target.name;
    this.setState({
      [selected]: e.target.value
    });
  };

  onRating = e => {
    let selected;
    selected = {
      [e.target.name]: {
        rating: e.target.value,
        comments: "empty"
      }
    };
    if (e.target.name) {
      this.setState({
        ...this.state,
        ratings: { ...this.state.ratings, ...selected }
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.props);
    this.props.uploadRatingsThunk(this.state);
    // this.props.history.push('/');
  }

  renderDropdown = attr => {
    console.log(this.state.ratings[attr], this.state.ratings[attr].rating);
    return (
      <ButtonToolbar className="d-flex flex-column">
        <ToggleButtonGroup
          size="sm"
          className="mt-3"
          type="radio"
          name={attr}
          defaultValue={this.state.ratings[attr].rating}
          onClick={this.onRating}
        >
          <ToggleButton variant="outline-dark" value={1}>
            1
          </ToggleButton>
          <ToggleButton variant="outline-dark" value={2}>
            2
          </ToggleButton>
          <ToggleButton variant="outline-dark" value={3}>
            3
          </ToggleButton>
          <ToggleButton variant="outline-dark" value={4}>
            4
          </ToggleButton>
          <ToggleButton variant="outline-dark" value={5}>
            5
          </ToggleButton>
          <ToggleButton variant="outline-dark" value={6}>
            6
          </ToggleButton>
          <ToggleButton variant="outline-dark" value={7}>
            7
          </ToggleButton>
          <ToggleButton variant="outline-dark" value={8}>
            8
          </ToggleButton>
          <ToggleButton variant="outline-dark" value={9}>
            9
          </ToggleButton>
          <ToggleButton variant="outline-dark" value={10}>
            10
          </ToggleButton>
        </ToggleButtonGroup>
      </ButtonToolbar>
    );
  };
  render() {
    console.log(this.props);
    return (
      <Container className="mx-auto">
        <Row className="justify-content-center row1">
          <Col md={6} className="my-auto">
            <Card>
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
              <Card.Body>
                <Card.Title className="d-block">Marketo</Card.Title>
                <Card.Title className="d-block text-right w-100">
                  {this.props.userName}
                </Card.Title>
                <Card.Text className="d-block text-center">
                  Team Name : {this.props.participent.teamName}
                </Card.Text>
                <Card.Text className="d-block text-center">
                  Project Name : {this.props.participent.name}
                </Card.Text>
                <Card.Text className="d-block text-center">
                  Owner Name : {this.props.participent.ownerName}
                </Card.Text>
                <Card.Text className="d-block text-center">
                  Location : {this.props.participent.location}
                </Card.Text>
                <Card.Text className="d-block text-center">
                  Email : {this.props.participent.ownerEmail}
                </Card.Text>
                <Card.Text className="d-block text-center">
                  Overall Rating : {this.props.participent.overallRating}
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <Form>
                  <ListGroupItem>
                    <h6 className="d-inline-block">1.Design</h6>{" "}
                    {this.renderDropdown("Design")}
                  </ListGroupItem>
                  <ListGroupItem>
                    <h6 className="d-inline-block">
                      2.Innovation & Advancement
                    </h6>{" "}
                    {this.renderDropdown("Innovation and Advancement")}
                  </ListGroupItem>
                  <ListGroupItem>
                    <h6 className="d-inline-block">
                      3.Bussiness Implication of Idea
                    </h6>{" "}
                    {this.renderDropdown("Business implication of the idea")}
                  </ListGroupItem>
                  <ListGroupItem>
                    <h6 className="d-inline-block">
                      4.Solution Approach And Architecture
                    </h6>{" "}
                    {this.renderDropdown("Solution Approach and Architecture")}
                  </ListGroupItem>
                  <ListGroupItem>
                    <h6 className="d-inline-block">5.Working Demo Of Idea</h6>{" "}
                    {this.renderDropdown("Working demo of the Idea")}
                  </ListGroupItem>
                  <ListGroupItem>
                    <h6 className="d-inline-block">
                      6.Presentation And Demonstration
                    </h6>{" "}
                    {this.renderDropdown("Presentation and Demonstration")}
                  </ListGroupItem>
                  <ListGroupItem>
                    <h6 className="d-inline-block">
                      7.Things that impressed you about this team.
                    </h6>{" "}
                    <Form.Group
                      controlId="comments"
                      name="comments"
                      onChange={this.onChangeValue}
                    >
                      <Form.Control
                        as="textarea"
                        rows="3"
                        defaultValue={this.state.comments}
                        placeholder="Enter Your Answer Here..."
                      />
                    </Form.Group>
                  </ListGroupItem>
                  <Card.Link as={Button}  className="float-right" onClick={this.handleSubmit}>
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

let mapStateToProps = state => ({
  ideaId: state.ratings.ideaId,
  reviewerEmail: state.user.emailAddress,
  userName: state.user.firstName + " " + state.user.lastName,
  ratings: state.ratings,
  participent: state.participent
});

export default connect(
  mapStateToProps,
  {uploadRatingsThunk}
)(Marks);
