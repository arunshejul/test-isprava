import React, { Component } from "react";
import { Container, ListGroup, Button } from "react-bootstrap";

class ViewReview extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    const data = JSON.parse(localStorage.getItem("review"));
    this.setState({
      data: [
        {
          id: 1,
          nameOfVilla: "Arun",
          dateOfVisit: "12",
          pinCode: "",
          nameOfOwner: "",
          noteVillaSurrounding: "",
          noteVillaConstruction: "",
          noteVillaDecor: ""
        },
        {
          id: 2,
          nameOfVilla: "Shejul",
          dateOfVisit: "12",
          pinCode: "",
          nameOfOwner: "",
          noteVillaSurrounding: "",
          noteVillaConstruction: "",
          noteVillaDecor: ""
        }
      ]
    });
    console.log("@@@@@@@@@@@@@@@@");

    console.log(this.state.data);
  }

  handleDelete = () => {
    const data = JSON.parse(localStorage.getItem("review"));
  };

  render() {
    return (
      <Container>
        <ListGroup variant="flush">
          {this.state.data.map(item => (
            <ListGroup.Item key={item.id}>
              {item.nameOfVilla}
              <br />
              {item.dateOfVisit}
              <br />
              {item.pinCode}
              <br />
              <Button variant="danger" onClick={this.handleDelete}>
                Delete
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    );
  }
}

export default ViewReview;
