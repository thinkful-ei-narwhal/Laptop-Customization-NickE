import React from 'react';
import Option from './Option';
import slugify from 'slugify';


export default class Feature extends React.Component {
  render() {
    const options = this.props.feature.map(item => {
      const itemHash = slugify(JSON.stringify(item));

      return <Option itemHash={itemHash}
        item={item}
        feature={this.props.feature}
        featureName={this.props.featureName}
        selected={this.props.selected}
        usCurrencyFormat={this.props.usCurrencyFormat}
        updateFeature={this.props.updateFeature}
      />
    });
    //features={this.props.features} selected={this.state.selected}

    return (<fieldset className="feature" key={this.props.featureHash}>
      <legend className="feature__name">
        <h3>{this.props.featureName}</h3>
      </legend>
      {options}
    </fieldset>);
  }
}