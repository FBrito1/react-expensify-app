import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { ExpenseSummary } from '../../components/ExpensesSummary';

test('should correctly render ExpensesSummary with 1 expense', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal={235} />);

    expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with multiples expense', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={23} expensesTotal={23423423423} />);

    expect(toJSON(wrapper)).toMatchSnapshot();
});