import React from 'react';
import renderer from 'react-test-renderer';
import SearchBar from '../components/searchBar/SearchBar';

describe('SearchBar Component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SearchBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with default props', () => {
    const tree = renderer.create(<SearchBar onSearch={()=>{}} loading={false} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
