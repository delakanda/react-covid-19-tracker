import React from 'react';
import GMap from './GMap';
import { shallow, mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Root from '../../containers/root/Root';

Enzyme.configure({ adapter: new Adapter() });


describe('App Component', () => {

  let wrapper: Enzyme.ShallowWrapper;
  
  beforeEach(() => {
    wrapper = shallow(<GMap />);
  });

  it("GMap Renders", () => {
    mount(<GMap />);
  });

  it('Verify all GMap initial States', () => {
    // const gmapStates = wrapper.state;
  });
});