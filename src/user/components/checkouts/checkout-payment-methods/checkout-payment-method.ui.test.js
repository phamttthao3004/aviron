import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import CONSTANTS from '../../../scripts/apps/constants';
import CheckoutPaymentMethodUI from './checkout-payment-method.ui';

describe('<CheckoutPaymentMethodUI />', () => {
    it('h1 contains correct text', () => {
        const props = { clickElement: jest.fn(), goBack: jest.fn() };
        const wrapper = shallow(<CheckoutPaymentMethodUI {...props} />);
        expect(wrapper.find('.title').text()).toBe('Payment Method');
    });
    it('Render Checkout UI component matches the snapshot', () => {
        const props = { clickElement: jest.fn(), goBack: jest.fn() };
        const tree = shallow(<CheckoutPaymentMethodUI {...props} />);
        expect(shallowToJson(tree)).toMatchSnapshot();
    });

    it('Button click go to next step', () => {
        const clickElement = jest.fn();
        const goBack = jest.fn();
        const wrapper = shallow(<CheckoutPaymentMethodUI clickElement={clickElement} goBack={goBack} />);
        const history = { push: jest.fn() };
        const pathname = { pathname: CONSTANTS.NAVIGATION_URL.CHECKOUT_REVIEW_ORDER };
        wrapper.find('.btn-pay').simulate('click');
        expect(clickElement).toHaveBeenCalled(history.push(pathname));
    });
    it('Button click go back', () => {
        const clickElement = jest.fn();
        const goBack = jest.fn();
        const wrapper = shallow(<CheckoutPaymentMethodUI clickElement={clickElement} goBack={goBack} />);
        const history = { push: jest.fn() };
        const pathname = { pathname: CONSTANTS.NAVIGATION_URL.CHECKOUT_INFORMATION };
        wrapper.find('.btn-goback').simulate('click');
        expect(goBack).toHaveBeenCalled(history.push(pathname));
    });
});
