import React, { Component } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class AddReview extends Component {
  state = {
    dateOfVisit: new Date()
  };

  handleDateChange = value => {
    this.setState({
      dateOfVisit: value
    });
  };

  handleSubmit = event => {
    let str = localStorage.getItem("reviews");
    let reviews = JSON.parse(str);
    if (!reviews) {
      reviews = [];
    }
    reviews.push({
      id: Math.floor(Date.now() / 1000),
      nameOfVilla: event.target[0].value,
      dateOfVisit: this.state.dateOfVisit,
      pinCode: event.target[2].value,
      nameOfOwner: event.target[3].value,
      noteVillaSurrounding: event.target[4].value,
      noteVillaConstruction: event.target[5].value,
      noteVillaDecor: event.target[6].value
    });

    localStorage.setItem("reviews", JSON.stringify(reviews));
    console.log(JSON.stringify(reviews));

    alert("Data saved!");
  };

  render() {
    return (
      <Container>
        <br />
        <form onSubmit={this.handleSubmit}>
          <Row>
            <Col xs={6} sm={6} md={6} lg={6}>
              <Form.Group controlId="formBasic1">
                <Form.Label>Name of the villa</Form.Label>
                <Form.Control required type="text" placeholder="Name of the villa" />
              </Form.Group>
            </Col>
            <Col xs={6} sm={6} md={6} lg={6}>
              <Form.Group controlId="formBasic2">
                <Form.Label>Date of visit</Form.Label>
                <br />
                <DatePicker selected={this.state.dateOfVisit} onChange={this.handleDateChange} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs={6} sm={6} md={6} lg={6}>
              <Form.Group controlId="formBasic3">
                <Form.Label>PinCode</Form.Label>
                <Form.Control required type="number" maxLength={5} placeholder="Pincode" />
              </Form.Group>
            </Col>
            <Col xs={6} sm={6} md={6} lg={6}>
              <Form.Group controlId="formBasic4">
                <Form.Label>Owner's name (optional)</Form.Label>
                <Form.Control type="text" placeholder="Owner's name (optional)" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs={6} sm={6} md={6} lg={6}>
              <Form.Group controlId="formBasic5">
                <Form.Label>A note about the surrounding area of the villa</Form.Label>
                <Form.Control required type="text" placeholder="A note about the surrounding area of the villa" />
              </Form.Group>
            </Col>
            <Col xs={6} sm={6} md={6} lg={6}>
              <Form.Group controlId="formBasic6">
                <Form.Label>A note about the construction quality of the villa</Form.Label>
                <Form.Control required type="text" placeholder="A note about the construction quality of the villa" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs={6} sm={6} md={6} lg={6}>
              <Form.Group controlId="formBasic7">
                <Form.Label>A note about the villa decor</Form.Label>
                <Form.Control required type="text" placeholder="A note about the villa decor" />
              </Form.Group>
            </Col>
            <Col xs={6} sm={6} md={6} lg={6} />
          </Row>
          <Row>
            <Col xs={3} sm={3} md={3} lg={3}>
              <Button variant="primary" type="submit">
                Add Review
              </Button>
            </Col>
          </Row>
        </form>
      </Container>
    );
  }
}

export default AddReview;
