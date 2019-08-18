import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import TopUI from './top.ui';

describe('Top UI', () => {
    it('Render Top UI component', () => {
        const props = { currentPage: undefined, clickMenu: undefined, open: undefined, setOpen: undefined, logOut: undefined };
        const com = shallow(<TopUI {...props} />);
        expect(shallowToJson(com)).toMatchSnapshot();
    });
});
