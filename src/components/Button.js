import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  addToCart() {
    this.props.addToCart(this.props.item);
  }

  removeFromCart() {
    this.props.removeFromCart(this.props.item);
  }

  render() {
    return (
      <div className="Button">
        <button onClick={this.addToCart}> Add to Cart </button>
        <button onClick={this.removeFromCart}> Remove from Cart </button>
      </div>
    );
  }
}

export default Button;
