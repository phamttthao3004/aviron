import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import rootAction from '../../../actions/action';
import CONSTANTS from '../../../scripts/apps/constants';
import ProfileAchievementUI from './profile-achievement.ui';

const ProfileAchievements = () => {
    const dispatch = useDispatch();
    const profileSetState = _data => {
        dispatch(rootAction.profile.setState(_data));
    };
    useEffect(() => {
        profileSetState({ current_tab: CONSTANTS.PROFILE_PAGE.CURRENT_TAB.PROFILE_ACHIEVEMENT });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return <ProfileAchievementUI />;
};

export default ProfileAchievements;
