import React, { Component } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class AddReview extends Component {
  state = {
    nameOfVilla: "",
    dateOfVisit: new Date(),
    pinCode: "",
    nameOfOwner: "",
    noteVillaSurrounding: "",
    noteVillaConstruction: "",
    noteVillaDecor: ""
  };

  handleDateChange = (value, formattedValue) => {
    this.setState({
      dateOfVisit: value,
      formattedValue: formattedValue
    });
  };

  handleTextClear = () => {
    this.setState({
      nameOfVilla: "",
      dateOfVisit: "",
      pinCode: "",
      nameOfOwner: "",
      noteVillaSurrounding: "",
      noteVillaConstruction: "",
      noteVillaDecor: "",
      setValidated: false,
      validated: false
    });
  };

  handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    const {
      nameOfVilla,
      dateOfVisit,
      pinCode,
      nameOfOwner,
      noteVillaSurrounding,
      noteVillaConstruction,
      noteVillaDecor
    } = this.state;

    localStorage.setItem(
      "review",
      JSON.stringify({
        nameOfVilla: nameOfVilla,
        dateOfVisit: dateOfVisit,
        pinCode: pinCode,
        nameOfOwner: nameOfOwner,
        noteVillaSurrounding: noteVillaSurrounding,
        noteVillaConstruction: noteVillaConstruction,
        noteVillaDecor: noteVillaDecor
      })
    );
  };

  render() {
    return (
      <Container>
        <form onSubmit={this.handleSubmit}>
          <br />
          <Row>
            <Col xs={6} sm={6} md={6} lg={6}>
              <Form.Group controlId="formBasic1">
                <Form.Label>Name of the villa</Form.Label>
                <Form.Control
                  required
                  type="text"
                  value={this.state.nameOfVilla}
                  placeholder="Name of the villa"
                  onChange={txt => this.setState({ nameOfVilla: txt.value })}
                />
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
                <Form.Control
                  required
                  type="text"
                  value={this.state.pinCode}
                  placeholder="Pincode"
                  onChange={txt => this.setState({ pinCode: txt.value })}
                />
              </Form.Group>
            </Col>
            <Col xs={6} sm={6} md={6} lg={6}>
              <Form.Group controlId="formBasic4">
                <Form.Label>Owner's name (optional)</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.nameOfOwner}
                  placeholder="Owner's name (optional)"
                  onChange={txt => this.setState({ nameOfOwner: txt.value })}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs={6} sm={6} md={6} lg={6}>
              <Form.Group controlId="formBasic5">
                <Form.Label>A note about the surrounding area of the villa</Form.Label>
                <Form.Control
                  required
                  type="text"
                  value={this.state.noteVillaSurrounding}
                  placeholder="A note about the surrounding area of the villa"
                  onChange={txt => this.setState({ noteVillaSurrounding: txt.value })}
                />
              </Form.Group>
            </Col>
            <Col xs={6} sm={6} md={6} lg={6}>
              <Form.Group controlId="formBasic6">
                <Form.Label>A note about the construction quality of the villa</Form.Label>
                <Form.Control
                  required
                  type="text"
                  value={this.state.noteVillaConstruction}
                  placeholder="A note about the construction quality of the villa"
                  onChange={txt => this.setState({ noteVillaConstruction: txt.value })}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs={6} sm={6} md={6} lg={6}>
              <Form.Group controlId="formBasic7">
                <Form.Label>A note about the villa decor</Form.Label>
                <Form.Control
                  required
                  type="text"
                  value={this.state.noteVillaDecor}
                  placeholder="A note about the villa decor"
                  onChange={txt => this.setState({ noteVillaDecor: txt.value })}
                />
              </Form.Group>
            </Col>
            <Col xs={6} sm={6} md={6} lg={6} />
          </Row>
          <Row>
            <Col
              xs={3}
              sm={3}
              md={3}
              lg={3}
              style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}
            >
              <Button variant="primary" type="submit">
                Add Review
              </Button>

              <Button variant="secondary" onClick={this.handleTextClear}>
                Clear
              </Button>
            </Col>
          </Row>
        </form>
      </Container>
    );
  }
}

export default AddReview;
