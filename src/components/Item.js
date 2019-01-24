import React, { Component } from 'react';
import ButtonContainer from '../containers/ButtonContainer';
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardGroup,
  CardSubtitle,
  CardBody
} from 'reactstrap';

class Item extends Component {
  render() {
    return (
      <Card>
        <CardImg
          top
          width="100px"
          height="100px"
          src={this.props.item.image_url}
          alt="Card image cap"
        />
        <CardTitle>{this.props.item.name}</CardTitle>
        <CardText>Price: ${this.props.item.price}</CardText>
        <ButtonContainer item={this.props.item} />
      </Card>
    );
  }
}

export default Item;
