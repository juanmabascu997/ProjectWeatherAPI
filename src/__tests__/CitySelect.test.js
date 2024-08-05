import React from 'react';
import renderer from 'react-test-renderer';
import CitySelect from '../components/select/SelectCity';

describe('CitySelect Component', () => {
  it('renders correctly with citiesList', () => {
    const citiesList = [
      {
        id: 3837056,
        name: "San Luis",
      },
      {
        id: 4164138,
        name: "Miami",
      }
    ];
    const tree = renderer.create(<CitySelect citiesList={citiesList} onSearch={()=>{}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
