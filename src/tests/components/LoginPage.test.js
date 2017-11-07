import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { LoginPage } from '../../components/LoginPage';


test('should render Login page', () => {
    const wrapper = shallow(<LoginPage startLogin={() => {}} />)

    expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should called startLogin on button click ', () => {
    const startLogin = jest.fn();
    const wrapper = shallow(<LoginPage startLogin={startLogin} />);
    wrapper.find('button').simulate('click');

    expect(startLogin).toHaveBeenCalled();
});
