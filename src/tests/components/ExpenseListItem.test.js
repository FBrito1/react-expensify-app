//create a test file
//grab imports
//render expense list item with fixture date
//create snapshot

import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import expenses from '../fixtures/expenses';
import ExpenseListItem from '../../components/ExpenseListItem';


test('should render Expense List Item with correctly props', () => {
    const wrapper = shallow(<ExpenseListItem  {...expenses[0]}  />)


    expect(toJSON(wrapper)).toMatchSnapshot();
}); 