import React from 'react';
import PropTypes from 'prop-types';
import CONSTANTS from '../../scripts/apps/constants';
import ProfileUserInfo from './profile-user-infos/profile-user-info';

const ProfileUI = props => {
    const { currentTab, clickElement } = props;
    return (
        <div>
            <div className="container-fluid">
                <ul data-testid="tab-list">
                    <li
                        role="presentation"
                        className={`pointer ${currentTab === CONSTANTS.PROFILE_PAGE.CURRENT_TAB.PROFILE_OVERVIEW ? 'active' : ''}`}
                        onClick={clickElement.bind(this, CONSTANTS.PROFILE_PAGE.CURRENT_TAB.PROFILE_OVERVIEW)}
                    >
                        <span>OVERVIEW</span>
                    </li>
                    <li
                        role="presentation"
                        className={`pointer ${currentTab === CONSTANTS.PROFILE_PAGE.CURRENT_TAB.PROFILE_WORKOUT ? 'active' : ''}`}
                        onClick={clickElement.bind(this, CONSTANTS.PROFILE_PAGE.CURRENT_TAB.PROFILE_WORKOUT)}
                    >
                        <span>WORKOUTS</span>
                    </li>
                    <li
                        role="presentation"
                        className={`pointer ${currentTab === CONSTANTS.PROFILE_PAGE.CURRENT_TAB.PROFILE_ACHIEVEMENT ? 'active' : ''}`}
                        onClick={clickElement.bind(this, CONSTANTS.PROFILE_PAGE.CURRENT_TAB.PROFILE_ACHIEVEMENT)}
                    >
                        <span>ACHIEVEMENTS</span>
                    </li>
                    <li
                        role="presentation"
                        className={`pointer ${currentTab === CONSTANTS.PROFILE_PAGE.CURRENT_TAB.PROFILE_BASICINFO ? 'active' : ''}`}
                        onClick={clickElement.bind(this, CONSTANTS.PROFILE_PAGE.CURRENT_TAB.PROFILE_BASICINFO)}
                    >
                        <span>BASIC INFO</span>
                    </li>
                </ul>
            </div>
            <ProfileUserInfo />
        </div>
    );
};

ProfileUI.propTypes = {
    currentTab: PropTypes.number,
    clickElement: PropTypes.func
};
ProfileUI.defaultProps = {
    currentTab: CONSTANTS.PROFILE_PAGE.CURRENT_TAB.NONE,
    clickElement: () => {}
};

export default ProfileUI;
