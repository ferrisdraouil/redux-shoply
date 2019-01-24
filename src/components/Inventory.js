import React, { Component } from 'react';
import Item from './Item';
import { Link } from 'react-router-dom';
import { CardGroup } from 'reactstrap';

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
        <CardGroup>
          {this.props.items.map((item, idx) => {
            return <Item item={item} key={idx} />;
          })}
        </CardGroup>
      </div>
    );
  }
}

export default Inventory;
