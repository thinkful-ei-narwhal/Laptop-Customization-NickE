import React from 'react';
import slugify from 'slugify';

export default class Option extends React.Component {
  render() {
    return (
      <div key={this.props.itemHash} className="feature__item">
        <input
          type="radio"
          id={this.props.itemHash}
          className="feature__option"
          name={slugify(this.props.featureName)}
          checked={this.props.item.name === this.props.selected[this.props.featureName].name} //NEED TO PASS IN SELECTED
          onChange={e => this.props.updateFeature(this.props.featureName, this.props.item)}
        />
        <label htmlFor={this.props.itemHash} className="feature__label">
          {this.props.item.name} ({this.props.usCurrencyFormat.format(this.props.item.cost)})
        </label>
      </div>
    );

  }
}