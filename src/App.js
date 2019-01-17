import React, { Component } from 'react';
import ResponsiveElement from 'terra-responsive-element/lib/ResponsiveElement';
import './App.css';

class App extends Component {

  render() {
    const var1 = (
      <div>
        <div>
          <b className='a'>a</b>
        </div>
      </div>
    );

    const var2 = (
      <div>
        <div>
          <b className='b'>b</b>
        </div>
      </div>
    );
    return <ResponsiveElement defaultElement={var1} tiny={var2} responsiveTo='window'/>;
  }
}

export default App;
