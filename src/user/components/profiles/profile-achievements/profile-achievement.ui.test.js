import React from 'react';
import { shallow } from 'enzyme';
import ProfileAchievementUI from './profile-achievement.ui';

describe('Profile Achievement', () => {
    it('Render Profile Achievement component', () => {
        shallow(<ProfileAchievementUI />);
    });
});
