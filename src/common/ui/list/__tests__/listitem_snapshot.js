import React from 'react';
import uuid from 'uniqid';
import ListItem from '../views/listItem';

it('render listitem correctly', () => {
  const ListItemWrapper = shallow(<ListItem
    name="ListItemTest"
    onSelect={() => {}}
    id={`listitem${uuid()}`}
    status="open"
  />);
  expect(ListItemWrapper).toMatchSnapshot();
});

