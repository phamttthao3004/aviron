import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import ProfileUI from './profile.ui';
import CONSTANTS from '../../scripts/apps/constants';

describe('Profile', () => {
    it(`should render a list with 4 items by default`, () => {
        const props = { currentTab: undefined, clickElement: jest.fn() };
        const wrapper = shallow(<ProfileUI {...props} />);
        const li = wrapper.find('li');
        expect(li.length).toBe(4);
    });
    it('Render Profile UI component with currentTab=undefined', () => {
        const props = { currentTab: undefined, clickElement: undefined };
        const wrapper = shallow(<ProfileUI {...props} />);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
    it('Render Profile UI component with currentTab=PROFILE_OVERVIEW', () => {
        const props = { currentTab: CONSTANTS.PROFILE_PAGE.CURRENT_TAB.PROFILE_OVERVIEW, clickElement: undefined };
        const wrapper = shallow(<ProfileUI {...props} />);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
    it('Render Profile UI component with currentTab=PROFILE_WORKOUT', () => {
        const props = { currentTab: CONSTANTS.PROFILE_PAGE.CURRENT_TAB.PROFILE_WORKOUT, clickElement: undefined };
        const wrapper = shallow(<ProfileUI {...props} />);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
    it('Render Profile UI component with currentTab=PROFILE_ACHIEVEMENT', () => {
        const props = { currentTab: CONSTANTS.PROFILE_PAGE.CURRENT_TAB.PROFILE_ACHIEVEMENT, clickElement: undefined };
        const wrapper = shallow(<ProfileUI {...props} />);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
    it('Render Profile UI component with currentTab=PROFILE_BASICINFO', () => {
        const props = { currentTab: CONSTANTS.PROFILE_PAGE.CURRENT_TAB.PROFILE_BASICINFO, clickElement: undefined };
        const wrapper = shallow(<ProfileUI {...props} />);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
});
