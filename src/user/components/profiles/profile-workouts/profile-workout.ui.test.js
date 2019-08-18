import React from 'react';
import { shallow } from 'enzyme';
import ProfileWorkoutUI from './profile-workout.ui';

describe('Profile Workout UI', () => {
    it('Render Profile Workout UI component', () => {
        shallow(<ProfileWorkoutUI />);
    });
});
