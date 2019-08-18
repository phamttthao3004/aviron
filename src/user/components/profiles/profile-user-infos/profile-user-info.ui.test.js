import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import ProfileUserInfoUI from './profile-user-info.ui';

describe('Profile Info UI', () => {
    it('Render Profile Info UI component', () => {
        const props = { openDialog: undefined, setOpenDialog: undefined };
        const com = shallow(<ProfileUserInfoUI {...props} />);
        expect(shallowToJson(com)).toMatchSnapshot();
    });
});
