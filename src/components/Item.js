import React, { Component } from 'react';
import ButtonContainer from '../containers/ButtonContainer';

class Item extends Component {
  render() {
    console.log('item props', this.props);
    return (
      <React.Fragment>
        <p>{this.props.item.name}</p>{' '}
        <img src={this.props.item.image_url} alt="#" />
        <p>Price: ${this.props.item.price}</p>
        <ButtonContainer item={this.props.item} />
      </React.Fragment>
    );
  }
}

export default Item;
