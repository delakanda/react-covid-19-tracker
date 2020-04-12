import React from 'react';
import CovidTable from './CovidTable';
import { shallow, mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Root from '../../containers/root/Root';
import { ICovidSummaryData } from '../../types/CovidTypes';
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() });


describe('App Component', () => {

  let mockData: ICovidSummaryData = {
    active_cases: 100,
    death_ratio: 0.1,
    deaths: 100,
    recovered: 100,
    recovery_ratio: 0.1,
    total_cases: 100
  };
  
  let wrapper: Enzyme.ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<CovidTable covidSummaryData={mockData} />);
  });

  it("CovidTable Renders", () => {
    mount(<CovidTable covidSummaryData={mockData} />);
  });

  it('Verify Table Row Count', () => {
    const tableRows = wrapper.find('tr');
    expect(tableRows.length).toBe(4);
  });

  it('Verify Snapshot', () => {
    const tree = renderer
      .create(<CovidTable covidSummaryData={mockData} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
