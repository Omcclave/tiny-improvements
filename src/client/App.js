import React, { Component } from "react";
import {
  Col,
  Container,
  Row,
  Card,
  CardBody,
  Button,
  Form,
  FormGroup,
  Block,
  Input,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  circle,
  borderRadius,
  Background,
  ModalFooter
} from "reactstrap";
import { Image } from "react-bootstrap";
import AwardCard from "./components/AwardCard";
import KudosForm from "./components/KudosForm";
import axios from "axios";

let container = {
  backgroundImage: "url(https://images4.alphacoders.com/592/592188.jpg)",
  height: "65vh"
  // BackgroundAttachment: fixed
  // BackgroundRepeat: norepeat
};

// let background = {
//   background: "#e2e9ee"
// };

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      awards: [],
      comment: "",
      title: "",
      receiver: "",
      sender: "",
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  postKudo = () => {
    axios
      .post("/api/kudos", {
        Name: this.state.title,
        Comment__c: this.state.comment,
        Receiver__c: this.state.users.find(
          user => user.name === this.state.receiver
        ).id,
        Sender__c: this.state.sender.id
      })
      .then(response => {
        // this.setState({
        //   awards: response.data
        // })
      });
    this.toggle();
  };

  updateKudosText = event => {
    this.setState({ comment: event.target.value });
  };

  updateKudosTitle = event => {
    this.setState({ title: event.target.value });
  };

  updatereceiver = event => {
    this.setState({ receiver: event.target.value });
  };

  updatesender = event => {
    this.setState({ sender: event.target.value });
  };

  componentDidMount = () => {
    axios.get("/api/kudos").then(response => {
      this.setState({
        awards: response.data
      });
    });

    axios.get("/api/users").then(response => {
      this.setState({
        users: response.data,
        receiver: response.data[0],
        sender: response.data[0]
      });
    });
    axios.get("/api/kudos").then(response => {
      this.setState({
        awards: response.data
      });
    });
  };

  render() {
    return (
      <div style={container}>
        <Container>
          <Row>
            <Col md="3">
              <Card>
                <CardBody>
                  <h1 className="text-info">
                    twitter
                    <img
                      src="https://cdn2.iconfinder.com/data/icons/minimalism/512/twitter.png"
                      width="50px"
                    />
                  </h1>
                  <Button
                    size="lg"
                    color="info"
                    outline
                    onClick={this.toggle}
                    block
                  >
                    Tweet
                  </Button>
                  <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    className={this.props.className}
                  >
                    <ModalHeader toggle={this.toggle}>Give Kudos</ModalHeader>
                    <ModalBody>
                      <KudosForm
                        users={this.state.users}
                        updateKudosText={this.updateKudosText}
                        comment={this.state.comment}
                        title={this.state.title}
                        updateKudosTitle={this.updateKudosTitle}
                        updatereceiver={this.updatereceiver}
                        receiver={this.state.receiver}
                        updatesender={this.updatesender}
                        sender={this.state.sender}
                      />
                    </ModalBody>
                    <ModalFooter>
                      <Button color="info" onClick={this.postKudo}>
                        Post For America
                      </Button>
                      <Button color="danger" onClick={this.toggle}>
                        Putin Said No
                      </Button>
                    </ModalFooter>
                  </Modal>
                </CardBody>
              </Card>
            </Col>

            <Col md="12" lg="9">
              {this.state.awards.map((e, index) => (
                <AwardCard
                  key={index}
                  title={e.name}
                  comment={e.comment__c}
                  receiver={e.receiver__r.Name}
                  sender={e.sender__r.Name}
                  email={e.sender__r.email__c}
                  date={e.lastmodifieddate}
                />
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
