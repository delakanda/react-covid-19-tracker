import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import Root from '../root/Root';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });


describe('App Component', () => {
  it('Check if App Component is Mounted', () => {
    const wrapper = shallow(<Root />);
    expect(wrapper.contains(<App />)).toBe(true);
  });
});