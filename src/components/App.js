import React from 'react';

// Don't need to use relative import here because same folder path
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';


class App extends React.Component {
  render() {
    return (
      <div className="catch-of-the-day" >
        <div className="menu">
          <Header tagline="fresh seafood market"/>
        </div>
        <Order />
        <Inventory />
      </div>
    );
  }
}

export default App;
