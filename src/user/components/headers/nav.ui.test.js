import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import NavUI from './nav.ui';
import CONSTANTS from '../../scripts/apps/constants';

describe('Nav UI', () => {
    it('Render Nav UI component with currentPage=undefined', () => {
        const props = { currentPage: undefined, clickMenu: undefined, openCart: undefined, setOpenCart: undefined };
        const com = shallow(<NavUI {...props} />);
        expect(shallowToJson(com)).toMatchSnapshot();
    });

    it('Render Nav UI component with currentPage=CONSTANTS.SIDEBAR_PAGEID.PROFILE', () => {
        const props = { currentPage: CONSTANTS.SIDEBAR_PAGEID.PROFILE, clickMenu: undefined, openCart: undefined, setOpenCart: undefined };
        const com = shallow(<NavUI {...props} />);
        expect(shallowToJson(com)).toMatchSnapshot();
    });

    it('Render Nav UI component with currentPage=CONSTANTS.SIDEBAR_PAGEID.EQUIPMENT', () => {
        const props = { currentPage: CONSTANTS.SIDEBAR_PAGEID.EQUIPMENT, clickMenu: undefined, openCart: undefined, setOpenCart: undefined };
        const com = shallow(<NavUI {...props} />);
        expect(shallowToJson(com)).toMatchSnapshot();
    });

    it('Render Nav UI component with currentPage=CONSTANTS.SIDEBAR_PAGEID.SUBSCRIPTION', () => {
        const props = { currentPage: CONSTANTS.SIDEBAR_PAGEID.SUBSCRIPTION, clickMenu: undefined, openCart: undefined, setOpenCart: undefined };
        const com = shallow(<NavUI {...props} />);
        expect(shallowToJson(com)).toMatchSnapshot();
    });

    it('Render Nav UI component with currentPage=CONSTANTS.SIDEBAR_PAGEID.RECEIPT', () => {
        const props = { currentPage: CONSTANTS.SIDEBAR_PAGEID.RECEIPT, clickMenu: undefined, openCart: undefined, setOpenCart: undefined };
        const com = shallow(<NavUI {...props} />);
        expect(shallowToJson(com)).toMatchSnapshot();
    });
});
