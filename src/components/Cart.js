import React, { Component } from 'react';
import Item from './Item';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log('CART PROPS', this.props);
    return (
      <div className="Cart">
        {this.props.cart.map(elem => {
          return (
            <div>
              <Item {...elem} />
              <p> {elem.count} In Cart </p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Cart;
