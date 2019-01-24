import React, { Component } from 'react';
import Item from './Item';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formCode: '',
      total: props.cart.reduce((acc, val) => acc + val.price * val.count, 0)
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let total = this.props.cart.reduce(
      (acc, val) => acc + val.price * val.count,
      0
    );
    const validCodes = { REMOVE10: 0.1, REMOVE20: 0.2, REMOVE30: 0.3 };
    for (let x in validCodes) {
      if (x === this.state.formCode) {
        total = total * (1 - validCodes[x]);
      }
    }
    this.setState({ total });
  }

  render() {
    console.log('CART STATE', this.state);
    // console.log('CART props', this.props.cart);
    return (
      <div className="Cart">
        <div>Total cost: {this.state.total}</div>
        {this.props.cart.map(elem => {
          return (
            <div>
              <Item item={{ ...elem }} />
              <p> {elem.count} In Cart </p>
            </div>
          );
        })}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="formCode">Enter Discount Code</label>
          <input name="formCode" id="formCode" onChange={this.handleChange} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Cart;
