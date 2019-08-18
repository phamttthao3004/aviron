import React from 'react';
import { shallow } from 'enzyme';
import ProductImpactUI from './product-impact.ui';

describe('Product Impact UI', () => {
    it('Render Product Impact UI component', () => {
        shallow(<ProductImpactUI />);
    });
});
