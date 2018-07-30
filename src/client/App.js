import React, { Component } from "react";
// import { Button } from "@salesforce/design-system-react";
import { Col, Container, Row, Card, Button, CardBody } from "reactstrap";
import AwardCard from "./components/AwardCard";
import VoteForm from "./components/VoteForm";
import KudosForm from "./components/KudosForm";
import PetCard from "./components/PetCard";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      friends: [],
      awards: [],
      kudosText: "",
      kudosTitle: "",
      receiver: "",
      sender: "",
      pets: [
        {
          name: "Memphis",
          age: 12,
          type: "Dog"
        },
        {
          name: "Baby",
          age: 11,
          type: "Panther"
        },
        {
          name: "Peach",
          age: 3,
          type: "Cat"
        },
        {
          name: "Opal",
          age: 1,
          type: "Kitten"
        }
      ]
    };
  }
  postKudos = () => {
    axios
      .post("/api/kudos", {
        id: 5,
        title: this.state.kudosTitle,
        comment: this.state.kudosText,
        receiver: this.state.receiver,
        sender: this.state.sender
      })
      .then(response => {
        this.setState({
          awards: response.data
        });
      });
  };
  updateKudosText = event => {
    this.setState({ kudosText: event.target.value });
  };

  updateKudosTitle = event => {
    this.setState({ kudosTitle: event.target.value });
  };

  updatereceiver = event => {
    this.setState({ receiver: event.target.value });
  };

  updatesender = event => {
    this.setState({ sender: event.target.value });
  };
  componentDidMount = () => {
    axios
      .post("/api/friends", {
        name: "Pablo Escobar",
        location: "Nueva, York"
      })
      .then(response => {
        this.setState({
          friends: response.data
        });
      });

    axios
      .post("/api/kudos", {
        receiver: "archit",
        id: 4,
        title: "Loudest Carrot Eater Award",
        comment: "Who chews carrots like that at work??"
      })
      .then(response => {
        this.setState({
          awards: response.data
        });
      });

    axios.get("/api/awards").then(response => {
      this.setState({
        awards: response.data
      });
    });

    axios.get("/api/kudos").then(response => {
      this.setState({
        awards: response.data
      });
    });

    axios.get("/api/friends").then(response => {
      console.log(response);
      this.setState({ friends: response.data });
    });

    axios.get("/api/users").then(response => {
      this.setState({ users: response.data });
    });
  };

  render() {
    return (
      <Container>
        <Row>
          <Col md="12">
            <Button label="Hello Button" />
            <h1>Tiny Progress</h1>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md="12" lg="3">
            <Card>
              <CardBody className="mx-auto">
                <Button color="success" onClick={this.postKudos}>
                  Give Kudos
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col md="12" lg="9">
            {this.state.awards.map((elem, index) => (
              <AwardCard
                key={index}
                title={elem.title}
                comment={elem.comment}
                receiver={elem.receiver}
                sender={elem.sender}
              />
            ))}
          </Col>
        </Row>
        {/* hw code */}
        <Row>
          <Col md="12">
            <KudosForm
              users={this.state.users}
              postKudos={this.postKudos}
              updateKudosText={this.updateKudosText}
              kudosText={this.state.kudosText}
              kudosTitle={this.state.kudosTitle}
              updateKudosTitle={this.updateKudosTitle}
              updatereceiver={this.updatereceiver}
              receiver={this.state.receiver}
              updatesender={this.updatesender}
              sender={this.state.sender}
            />
          </Col>
        </Row>

        <Row>
          <Col md="12" lg="9">
            {this.state.pets.map((elem, index) => (
              <PetCard
                key={index}
                name={elem.name}
                age={elem.age}
                breed={elem.type}
              />
            ))}
          </Col>
        </Row>
        {/* New code */}
        <hr />
        <h1> 🙋🏽 Friend Space </h1>
        <br />
        <h4> My Friend List: </h4>
        <br />
        {this.state.friends.map((elem, index) => (
          <Card key={index}>
            <CardBody>
              <h2> {elem.name}</h2>
              <p> {elem.location} </p>
            </CardBody>
          </Card>
        ))}
      </Container>
    );
  }
}

export default App;
