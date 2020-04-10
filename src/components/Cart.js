import React from 'react';
import CartItem from './CartItem';

export default class Cart extends React.Component {
  render() {
    const cartItems = Object.keys(this.props.selected).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = this.props.selected[feature];
      return <CartItem key={featureHash} 
              featureHash={featureHash} 
              selectedOption={selectedOption} 
              feature={feature} 
              usCurrencyFormat={this.props.usCurrencyFormat} 
              />
    });

    return (cartItems);
  }
}