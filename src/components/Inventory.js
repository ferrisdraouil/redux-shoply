import React, { Component } from 'react';
import Item from './Item';
import { Link } from 'react-router-dom';

class Inventory extends Component {
  render() {
    let totalItems = 0;
    if (this.props.cart.length > 0) {
      totalItems = this.props.cart.reduce((acc, val) => acc + val.count, 0);
    }
    return (
      <div className="Inventory">
        <Link to="/cart">Go to Cart</Link>
        <p>Items in cart: {totalItems}</p>
        {this.props.items.map(item => {
          return <Item item={item} />;
        })}
      </div>
    );
  }
}

export default Inventory;
