import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import CheckoutUI from './checkout.ui';

describe('Checkout UI', () => {
    it('Render Checkout UI component', () => {
        const props = {};
        const com = shallow(<CheckoutUI {...props} />);
        expect(shallowToJson(com)).toMatchSnapshot();
    });
});
