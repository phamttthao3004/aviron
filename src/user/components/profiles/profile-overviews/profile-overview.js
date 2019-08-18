import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import rootAction from '../../../actions/action';
import CONSTANTS from '../../../scripts/apps/constants';
import ProfileOverviewUI from './profile-overview.ui';

const ProfileOverview = () => {
    const [currentTime, setCurrentTime] = useState();
    const dispatch = useDispatch();
    const clickTime = value => {
        setCurrentTime(value);
    };
    const profileSetState = _data => {
        dispatch(rootAction.profile.setState(_data));
    };
    useEffect(() => {
        profileSetState({ current_tab: CONSTANTS.PROFILE_PAGE.CURRENT_TAB.PROFILE_OVERVIEW });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <ProfileOverviewUI currentTime={currentTime} clickTime={clickTime} />;
};
export default ProfileOverview;
