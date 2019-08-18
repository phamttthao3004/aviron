import React from 'react';
import { shallow } from 'enzyme';
import ProductUI from './product.ui';

describe('Product UI', () => {
    it('Render Product UI component', () => {
        shallow(<ProductUI />);
    });
});
