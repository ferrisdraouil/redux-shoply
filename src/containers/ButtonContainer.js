import React, { Component } from 'react';
import Button from '../components/Button';
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from '../actions';

class ButtonContainer extends Component {
  render() {
    return <Button {...this.props} />;
  }
}

// function mapDispatchToProps(dispatch, oP) {
//   return { addToCart: () => dispatch(addToCart(oP.item)), removeFromCart };
// }

// function mapStateToProps(state) {
//   return { cart: state.cart };
// }

export default connect(
  null,
  { addToCart, removeFromCart }
)(ButtonContainer);
