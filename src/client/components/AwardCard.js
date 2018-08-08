import React from "react";
import {
  Card,
  CardBody,
  Col,
  Container,
  Row,
  Button,
  Badge,
  size
} from "reactstrap";
import { Image, circle } from "react-bootstrap";

const AwardCard = props => (
  <Card style={{ marginBottom: "3px" }}>
    <CardBody>
      <p>#MakeAmericaGreatAgain</p>
      <Row>
        <Col md="2">
          <Image
            alt="profile pic"
            src="https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_400x400.jpg"
            circle
            width="100px"
          />
        </Col>
        <Col md="2.5">
          <h5>{props.sender}</h5> {props.email}
        </Col>
        <Col>
          <img
            alt="award"
            src="https://cdn.iconverticons.com/files/png/2ebd86c6b88dd219_256x256.png"
            width="30px"
          />
        </Col>
        <Col md="3">
          <Badge
            width="100px"
            href="https://twitter.com/realdonaldtrump"
            color="info"
            style={{ padding: "15px" }}
            pill
          >
            Following
          </Badge>
        </Col>
      </Row>

      <h3>
        @ {props.receiver}, {props.title}
      </h3>
      <h4> {props.comment} </h4>
      <br />
      <h6>{props.date}</h6>
      <div>
        <Button color="info" outline>
          <img
            src="https://png2.kisspng.com/20180402/exq/kisspng-computer-icons-comment-font-quotation-5ac1f7c89f0a70.3501451415226613206514.png"
            width="20px"
          />
          <Badge color="info">30</Badge>
        </Button>
        <Button color="success" outline>
          <img
            src="https://www.shareicon.net/data/512x512/2017/05/26/886471_share_512x512.png"
            width="20px"
          />
          <Badge color="success">100</Badge>
        </Button>
        <Button color="danger" outline>
          <img
            src="https://www.freeiconspng.com/uploads/like-outline-icon-png-22.png"
            width="20px"
          />
          <Badge color="danger">28</Badge>
        </Button>
      </div>
    </CardBody>
  </Card>
);

export default AwardCard;
