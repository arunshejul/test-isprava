import React, { Component } from "react";
import { Container, ListGroup, Button } from "react-bootstrap";

class ViewReview extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    let str = localStorage.getItem("reviews");
    let reviews = JSON.parse(str);
    if (!reviews) {
      reviews = [];
    }
    this.setState({
      data: reviews
    });
  }

  handleDelete = deleteid => {
    let str = localStorage.getItem("reviews");
    let reviews = JSON.parse(str);
    if (reviews) {
      reviews = reviews.filter(function(obj) {
        return obj.id !== deleteid;
      });
    }
    this.setState({
      data: reviews
    });
    localStorage.setItem("reviews", JSON.stringify(reviews));
    alert("Data deleted!");
  };

  render() {
    return (
      <Container>
        <ListGroup>
          {this.state.data.map(item => (
            <ListGroup.Item key={item.id}>
              <p>Name of Villa : {item.nameOfVilla}</p>
              <p>Date of visit : {item.dateOfVisit}</p>
              <p>A note about the surrounding area of the villa : {item.noteVillaSurrounding}</p>
              <p>A note about the construction quality of the villa : {item.noteVillaConstruction}</p>
              <p>A note about the villa decor : {item.noteVillaDecor}</p>
              <Button variant="danger" onClick={() => this.handleDelete(item.id)}>
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
