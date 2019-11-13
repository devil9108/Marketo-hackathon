import React, { Component } from "react";
import { Container,Row,Col,Card } from "react-bootstrap";

class MainPage extends Component {
  constructor(){
    super();
    this.state = {
      participents : [
        {
          "id": "owners-and-viewers-marketo",
          "name": "Owners and Viewers in Marketo",
          "description": "Owners and Viewers in Marketo",
          "ownerEmail": "glo65276@adobe.com",
          "ownerName": "Prateek Gupta",
          "location": "Bengaluru",
          "teamName": "Scobo",
          "status": "open",
          "firstRoundStatus": "null",
          "secondRoundStatus": "null",
          "overallRating": 0
        },
        {
          "id": "chatbot-conversation-summary",
          "name": "Chatbot Conversation Summary",
          "description": "chatbot conversation summary",
          "ownerEmail": "glo26360@adobe.com",
          "ownerName": "Dhanikh Palassery",
          "location": "Bengaluru",
          "teamName": "Notes",
          "status": "open",
          "firstRoundStatus": "null",
          "secondRoundStatus": "null",
          "overallRating": 0
        },
        {
          "id": "adobe-custom-skins-chrome-extension",
          "name": "Adobe Custom Skins Chrome Extension",
          "description": "Adobe custom skins chrome extension",
          "ownerEmail": "glo80368@adobe.com",
          "ownerName": "Krishna Kunapareddy",
          "location": "Bengaluru",
          "teamName": "Theme Overload",
          "status": "open",
          "firstRoundStatus": "null",
          "secondRoundStatus": "null",
          "overallRating": 0
        }
       ]
    }
  }
  render() {
    return (
      <Container className='mx-auto h-10'>
        <Row className='m-5'>
          <Col md={6} xs={1}><h2>Marketo - Heckathon</h2></Col>
          <Col md={6} className='float-right'><h4 className='float-right'>UserName</h4></Col>
        </Row>
        <Row>
          {this.state.participents.map((participent,index) =>(
            <Col md={4} key={index} className='d-flex align-items-stretch'>
              <Card className='m-2 text-center'>
                <Card.Body>
                  <Card.Title>{participent.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">by {participent.ownerName}</Card.Subtitle>
                  <Card.Text classname='float-left'>
                    <p><b>Team Name :</b> {participent.teamName}</p>
                    <p><b>Location : </b>{participent.location}</p>
                    <p><b>E-Mail : </b>{participent.ownerEmail}</p>
                    <p><b>Overall Rating : </b>{participent.overallRating}</p>
                  </Card.Text>
                  <Card.Link>Give Rating</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default MainPage;
