import React, { Component } from 'react';
import MyResponsiveElement from './MyResponsiveElement';

class Test2 extends Component {

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
    
    return <MyResponsiveElement default={var1} big={var2}/>;
  }
}

export default Test2;
