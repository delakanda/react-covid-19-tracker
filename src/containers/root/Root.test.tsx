import React from 'react';
import Root from './Root';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Root Component', () => {
  it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Root />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});