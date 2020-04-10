import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Feature from './components/Feature';
import Cart from './components/Cart';
import Total from './components/Total';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class App extends Component {
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
      return <Feature
        key={featureHash}
        featureHash={featureHash}
        feature={this.props.features[feature]}
        featureName={feature}
        usCurrencyFormat={USCurrencyFormat}
        selected={this.state.selected}
        updateFeature={this.updateFeature} />
    });

    return (
      <div className="App" >
        <Header />
        <main>
          <form className="main__form">
            <h2>Customize your laptop</h2>
            {features}
          </form>
          <section className="main__summary">
            <h2>Your cart</h2>
            <Cart usCurrencyFormat={USCurrencyFormat} selected={this.state.selected} />
            <Total usCurrencyFormat={USCurrencyFormat} selected={this.state.selected} />
          </section>
        </main>
        }
      </div>
    );
  }
}

export default App;
