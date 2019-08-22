import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AddReview from "./containers/AddReview";
import ViewReview from "./containers/ViewReview";
import NotFound from "./containers/NotFound";

export default () => (
  <Router>
    <div className="mainContainer">
      <Navbar />
      <Switch>
        <Route exact path="/" component={AddReview} />
        <Route exact path="/viewreview" component={ViewReview} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  </Router>
);
