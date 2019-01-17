import React from 'react';

class MyResponsiveElement extends React.Component {
  constructor() {
    super();
    this.state = {element: null};
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    this.handleResize(window.innerWidth);
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    let element = 'default';
    let width = window.innerWidth;

    if(width >= 400)
        element = 'big';

    if (this.state.element !== element) {
      this.setState({element});
    }
  }

  render() {
    if (this.state.element) {
      return this.props[this.state.element];
    }
    
    return null;
  }
}


export default MyResponsiveElement;