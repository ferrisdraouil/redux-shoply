import React, { Component } from 'react';
import Item from './Item';

class Inventory extends Component {
  render() {
    let totalItems = 0;
    if (this.props.cart.length > 0) {
      totalItems = this.props.cart.reduce((acc, val) => acc + val.count, 0);
    }
    return (
      <div className="Inventory">
        <p>Items in cart: {totalItems}</p>
        {this.props.items.map(item => {
          return <Item item={item} />;
        })}
      </div>
    );
  }
}

export default Inventory;
