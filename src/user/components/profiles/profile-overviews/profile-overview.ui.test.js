import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import ProfileOverviewUI from './profile-overview.ui';
import CONSTANTS from '../../../scripts/apps/constants';

describe('Profile Overview UI', () => {
    it('Render Profile Overview UI component with currentTime=undefined', () => {
        const props = { currentTime: undefined, clickTime: undefined };
        const com = shallow(<ProfileOverviewUI {...props} />);
        expect(shallowToJson(com)).toMatchSnapshot();
    });
    it('Render Profile Overview UI component with currentTime=CONSTANTS.TIME_TYPE.ALL', () => {
        const props = { currentTime: CONSTANTS.TIME_TYPE.ALL, clickTime: undefined };
        const com = shallow(<ProfileOverviewUI {...props} />);
        expect(shallowToJson(com)).toMatchSnapshot();
    });

    it('Render Profile Overview UI component with currentTime=CONSTANTS.TIME_TYPE.DAY', () => {
        const props = { currentTime: CONSTANTS.TIME_TYPE.DAY, clickTime: undefined };
        const com = shallow(<ProfileOverviewUI {...props} />);
        expect(shallowToJson(com)).toMatchSnapshot();
    });

    it('Render Profile Overview UI component with currentTime=CONSTANTS.TIME_TYPE.WEEK', () => {
        const props = { currentTime: CONSTANTS.TIME_TYPE.WEEK, clickTime: undefined };
        const com = shallow(<ProfileOverviewUI {...props} />);
        expect(shallowToJson(com)).toMatchSnapshot();
    });

    it('Render Profile Overview UI component with currentTime=CONSTANTS.TIME_TYPE.MONTH', () => {
        const props = { currentTime: CONSTANTS.TIME_TYPE.MONTH, clickTime: undefined };
        const com = shallow(<ProfileOverviewUI {...props} />);
        expect(shallowToJson(com)).toMatchSnapshot();
    });
});
