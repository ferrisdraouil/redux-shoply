import React, { Component } from 'react';
import Cart from '../components/Cart';
import { connect } from 'react-redux';

class CartContainer extends Component {
  render() {
    return (
      <div className="CartContainer">
        <Cart {...this.props} />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { cart: state.cart };
}

export default connect(mapStateToProps)(CartContainer);
