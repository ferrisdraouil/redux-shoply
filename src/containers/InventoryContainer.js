import React, { Component } from 'react';
import { connect } from 'react-redux';
import items from '.././db.json';
import Inventory from '../components/Inventory.js';

class InventoryContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { items };
  }
  render() {
    return (
      <div className="InventoryContainer">
        <Inventory {...this.state.items} {...this.props} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { cart: state.cart };
}

export default connect(mapStateToProps)(InventoryContainer);
