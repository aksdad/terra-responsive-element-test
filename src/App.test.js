import React from 'react';
import {mount} from 'enzyme';
import App from './App';

it('should render b', () => {
  console.log('window wdith is ' + window.innerWidth);
  let wrapper = mount(<App />);
  console.log(wrapper.debug());
  window.resizeTo(2000, 2000);
  console.log('window width is ' + window.innerWidth);
  wrapper.update();
  console.log(wrapper.debug());
  expect(wrapper.exists('.b')).toBeTruthy();  
});

it('resize event should be caught', () => {
  const listenerSpy = jest.fn(() => console.log('resize event was caught.'));
  window.addEventListener('resize', listenerSpy);
  window.resizeTo(2000, 2000);
  expect(listenerSpy).toHaveBeenCalled();
});