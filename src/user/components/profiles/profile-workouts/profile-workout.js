import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import rootAction from '../../../actions/action';
import CONSTANTS from '../../../scripts/apps/constants';
import ProfileWorkoutUI from './profile-workout.ui';

const ProfileWorkout = () => {
    const chart = {
        labels: [' ', '10m', '20m', '30m', '40m', '50m', '60m', '70m', '80m'],
        data: [0, 115, 95, 200, 260, 160, 120, 50, 0]
    };
    const dispatch = useDispatch();
    const profileSetState = _data => {
        dispatch(rootAction.profile.setState(_data));
    };
    useEffect(() => {
        profileSetState({ current_tab: CONSTANTS.PROFILE_PAGE.CURRENT_TAB.PROFILE_WORKOUT });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return <ProfileWorkoutUI labels={chart.labels} data={chart.data} />;
};

export default ProfileWorkout;
