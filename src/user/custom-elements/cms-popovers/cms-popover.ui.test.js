import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import CmsPopoverUI from './cms-popover.ui';

describe('CmsPopoverUI component', () => {
    it('Case 1: open=false', () => {
        const props = { open: false, children: <div>Hello CmsPopoverUI</div>, className: '', identifierContainer: 'test-container-12345', identifier: 'test-56789' };
        const com = shallow(<CmsPopoverUI {...props} />);
        expect(shallowToJson(com)).toMatchSnapshot();
    });

    it('Case 2: open=true', () => {
        const props = { open: true, children: <div>Hello CmsPopoverUI</div>, className: '', identifierContainer: 'test-container-12345', identifier: 'test-56789' };
        const com = shallow(<CmsPopoverUI {...props} />);
        expect(shallowToJson(com)).toMatchSnapshot();
    });
});
