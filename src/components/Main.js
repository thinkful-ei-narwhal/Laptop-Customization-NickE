import React from 'react';

import Feature from './Feature'
import Summary from './Summary';
import Total from './Total'

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

export default class Main extends React.Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota porolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  updateFeature = (featureName, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[featureName] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      return <Feature featureHash={featureHash}
        feature={this.props.features[feature]}
        featureName={feature}
        usCurrencyFormat={USCurrencyFormat}
        selected={this.state.selected}
        updateFeature={this.updateFeature} />
    });

    return (<main>
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {features}
      </form>
      <section className="main__summary">
        <h2>Your cart</h2>
        <Summary usCurrencyFormat={USCurrencyFormat} selected={this.state.selected} />
        <Total usCurrencyFormat={USCurrencyFormat} selected={this.state.selected} />
      </section>
    </main>);
  }
}