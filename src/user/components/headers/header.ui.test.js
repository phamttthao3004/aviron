import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import HeaderUI from './header.ui';
import CONSTANTS from '../../scripts/apps/constants';

describe('Header UI', () => {
    it('Render Header UI component with currentPage=undefined', () => {
        const props = { currentPage: undefined, clickMenu: undefined, openCart: undefined, setOpenCart: undefined, setBack: undefined };
        const com = shallow(<HeaderUI {...props} />);
        expect(shallowToJson(com)).toMatchSnapshot();
    });

    it('Render Header UI component with currentPage=CONSTANTS.SIDEBAR_PAGEID.PROFILE', () => {
        const props = { currentPage: CONSTANTS.SIDEBAR_PAGEID.PROFILE, clickMenu: undefined, openCart: undefined, setOpenCart: undefined, setBack: undefined };
        const com = shallow(<HeaderUI {...props} />);
        expect(shallowToJson(com)).toMatchSnapshot();
    });

    it('Render Header UI component with currentPage=CONSTANTS.SIDEBAR_PAGEID.EQUIPMENT', () => {
        const props = { currentPage: CONSTANTS.SIDEBAR_PAGEID.EQUIPMENT, clickMenu: undefined, openCart: undefined, setOpenCart: undefined, setBack: undefined };
        const com = shallow(<HeaderUI {...props} />);
        expect(shallowToJson(com)).toMatchSnapshot();
    });
});
