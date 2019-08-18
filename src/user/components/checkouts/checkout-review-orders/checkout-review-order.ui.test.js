import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import CONSTANTS from '../../../scripts/apps/constants';
import CheckoutReviewOrderUI from './checkout-review-order.ui';

describe('<CheckoutReviewOrderUI />', () => {
    it('h1 contains correct text', () => {
        const props = { goBack: jest.fn() };
        const wrapper = shallow(<CheckoutReviewOrderUI {...props} />);
        expect(wrapper.find('.title').text()).toBe('Review order');
    });
    it('Render Checkout UI component matches the snapshot', () => {
        const props = { goBack: jest.fn() };
        const tree = shallow(<CheckoutReviewOrderUI {...props} />);
        expect(shallowToJson(tree)).toMatchSnapshot();
    });
    it('Button click go back', () => {
        const goBack = jest.fn();
        const wrapper = shallow(<CheckoutReviewOrderUI goBack={goBack} />);
        const history = { push: jest.fn() };
        const pathname = { pathname: CONSTANTS.NAVIGATION_URL.CHECKOUT_PAYMENT_METHOD };
        wrapper.find('.btn-goback').simulate('click');
        expect(goBack).toHaveBeenCalled(history.push(pathname));
    });
});
