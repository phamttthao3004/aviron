import React from 'react';
import { shallow } from 'enzyme';
import ProductTouchUI from './product-touch.ui';

describe('Product Touch UI', () => {
    it('Render Product Touch UI component', () => {
        shallow(<ProductTouchUI />);
    });
});
