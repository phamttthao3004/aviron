import React from 'react';
import { shallow } from 'enzyme';
import AchievementList from './achievement-list';

describe('Achievement List', () => {
    it('Render Achievement List component', () => {
        shallow(<AchievementList />);
    });
});
