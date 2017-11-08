import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import LoadingPage from '../../components/LoadingPage';


test('should render Loagind Page correctly', () => {
    const wrapper = shallow(<LoadingPage />);

    expect(toJSON(wrapper)).toMatchSnapshot();
});