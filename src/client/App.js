import React, { Component } from "react";
import { Col, Container, Row, Button, Card, CardBody } from "reactstrap";
import AwardCard from "./components/AwardCard";
import VoteForm from "./components/VoteForm";
import KudosForm from "./components/KudosForm";

class App extends Component {
  state = {
    users: [
      {
        userId: 45089,
        name: "Owen",
        position: "Captian of the Breakroom"
      },
      {
        userId: 223,
        name: "Brooke",
        position: "Winner of All Dance-Offs"
      },
      {
        userId: 6582,
        name: "Gobi",
        position: "King of Mid-Day Naps"
      }
    ],
    awards: [
      {
        id: 1,
        title: "Best Boss Award!",
        comment: "Thanks for always looking out for us.",
        sender: "Fabian",
        receiver: "Leon"
      },
      {
        id: 2,
        title: "Longest Commute Award!",
        comment: "I can't believe Laura makes it to work as often as she does.",
        sender: "Archit",
        receiver: "Laura"
      },
      {
        id: 3,
        title: "Most likely to nap at work!",
        comment: "Maybe you need more coffee.",
        sender: "Gobi",
        receiver: "Owen"
      }
    ]
  };

  render() {
    return (
      <Container>
        <Row>
          <Col md="12">
            <h1>Tiny Progress</h1>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md="12" lg="3">
            <Card>
              <CardBody className="mx-auto">
                <Button color="success">Give Kudos</Button>
              </CardBody>
            </Card>
          </Col>
          <Col md="12" lg="9">
            {this.state.awards.map(elem => (
              <AwardCard
                title={elem.title}
                comment={elem.comment}
                receiver={elem.receiver}
              />
            ))}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
