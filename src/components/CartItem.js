import React from 'react';

export default class CartItem extends React.Component {
  render () {
      return (
        <div className="summary__option" key={this.props.featureHash}>
          <div className="summary__option__label">{this.props.feature} </div>
          <div className="summary__option__value">{this.props.selectedOption.name}</div>
          <div className="summary__option__cost">
            {this.props.usCurrencyFormat.format(this.props.selectedOption.cost)}
          </div>
        </div>
      );
  }
}