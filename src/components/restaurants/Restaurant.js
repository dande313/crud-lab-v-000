import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput';

class Restaurant extends Component {
  render() {
    const {text, id } = this.props.restaurant;
    return (
      <li>
        {text}
        <button onClick={this.handleOnClick}>Delete</button>
        <ReviewInput
          store={this.props.store}
          restaurantId={id} />
      </li>
    );
  }
};

export default Restaurant;
