import React from "react";
import {
  Col,
  Container,
  Row,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Card,
  CardBody
} from "reactstrap";
const PetCard = props => (
  <Card>
    <CardBody className="mx-auto">
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      <h2>{props.breed}</h2>
    </CardBody>
  </Card>
);
export default PetCard;
