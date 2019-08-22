import React from "react";
import { connect } from "react-redux";
import { addReview } from "../actions";

const AddReview = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addReview(input.value));
          input.value = "";
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">Add Review</button>
      </form>
    </div>
  );
};

export default connect()(AddReview);
