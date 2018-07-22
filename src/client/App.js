import React, { Component } from "react";
import { Col, Container, Row, Button, Card, CardBody } from "reactstrap";
import AwardCard from "./components/AwardCard";
import VoteForm from "./components/VoteForm";

class App extends Component {
  state = {
    awards: [
      {
        id: 1,
        title: "Best Boss Award!",
        comment: "Thanks for always looking out for us."
      },
      {
        id: 2,
        title: "Longest Commute Award!",
        comment: "I can't believe Leslie makes it to work as often as she does."
      },
      {
        id: 3,
        title: "Most likely to nap at work!",
        comment: "Maybe you need more coffee."
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
              <AwardCard title={elem.title} comment={elem.comment} />
            ))}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
