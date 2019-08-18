import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import CONSTANTS from '../../../scripts/apps/constants';
import CheckoutInformationUI from './checkout-information.ui';

describe('<CheckoutInformationUI />', () => {
    it('h1 contains correct text', () => {
        const props = { clickElement: jest.fn() };
        const wrapper = shallow(<CheckoutInformationUI {...props} />);
        expect(wrapper.find('.title').text()).toBe('Shipping information');
    });
    it('Render Checkout UI component matches the snapshot', () => {
        const props = { clickElement: jest.fn() };
        const tree = shallow(<CheckoutInformationUI {...props} />);
        expect(shallowToJson(tree)).toMatchSnapshot();
    });

    it('Button click go to next step', () => {
        const clickElement = jest.fn();
        const wrapper = shallow(<CheckoutInformationUI clickElement={clickElement} />);
        const history = { push: jest.fn() };
        const pathname = { pathname: CONSTANTS.NAVIGATION_URL.CHECKOUT_PAYMENT_METHOD };
        wrapper.find('.btn-pay').simulate('click');
        expect(clickElement).toHaveBeenCalled(history.push(pathname));
    });
});
