import React, { Component } from "react";
import { Container, ListGroup, Button } from "react-bootstrap";

class ViewReview extends Component {
  state = {
    reviews: []
  };

  componentDidMount() {
    let str = localStorage.getItem("reviews");
    let reviews = JSON.parse(str);
    if (!reviews) {
      reviews = [];
    }
    this.setState(reviews);
    console.log("@@@@@@@@@@@@@@@@");
    console.log(JSON.stringify(reviews));
  }

  handleDelete = () => {
    const reviews = JSON.parse(localStorage.getItem("reviews"));
  };

  render() {
    return (
      <Container>
        <ListGroup variant="flush">
          {this.state.reviews.map(item => (
            <ListGroup.Item key={item.id}>
              {item.nameOfVilla}
              <br />
              {item.dateOfVisit}
              <br />
              {item.pinCode}
              <br />
              <Button deleteid={item.id} variant="danger" onClick={this.handleDelete}>
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
