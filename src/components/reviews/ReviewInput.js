import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <label>Add Review:  </label>
        <input type="text" value={this.state.text} onChange={(event) => this.handleOnChange(event)} />
        <input type="submit" />
        </form>
        <Reviews
        store={this.props.store}
        restaurantId={this.props.restaurantId} />
      </div>
    );
  }
};

export default ReviewInput;
