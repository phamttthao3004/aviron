import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import MembershipUI from './membership.ui';

describe('Membership UI', () => {
    it('Render Membership UI component', () => {
        const props = {};
        const com = shallow(<MembershipUI {...props} />);
        expect(shallowToJson(com)).toMatchSnapshot();
    });
});
