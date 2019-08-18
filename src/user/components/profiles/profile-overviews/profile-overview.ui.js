import React from 'react';
import PropTypes from 'prop-types';
import AchievementList from '../achievement-list/achievement-list';
import CONSTANTS from '../../../scripts/apps/constants';
import ChallengeParameter, { TYPES } from '../../shared/challenge-parameter';

const ProfileOverviewUI = props => {
    const { currentTime, clickTime } = props;
    return (
        <div id="profile-overview-page">
            <div className="profile-overview-page-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1">
                            <ul className="nav-tab-time">
                                <li role="presentation" onClick={clickTime.bind(this, CONSTANTS.TIME_TYPE.ALL)}>
                                    <span className={currentTime === CONSTANTS.TIME_TYPE.ALL ? 'active' : ''}>All time</span>
                                </li>
                                <li role="presentation" onClick={clickTime.bind(this, CONSTANTS.TIME_TYPE.DAY)}>
                                    <span className={currentTime === CONSTANTS.TIME_TYPE.DAY ? 'active' : ''}>Last 24 hours</span>
                                </li>
                                <li role="presentation" onClick={clickTime.bind(this, CONSTANTS.TIME_TYPE.WEEK)}>
                                    <span className={currentTime === CONSTANTS.TIME_TYPE.WEEK ? 'active' : ''}>Last 7 days</span>
                                </li>
                                <li role="presentation" onClick={clickTime.bind(this, CONSTANTS.TIME_TYPE.MONTH)}>
                                    <span className={currentTime === CONSTANTS.TIME_TYPE.MONTH ? 'active' : ''}>Last 30 days</span>
                                </li>
                            </ul>
                            <div className="result-exercise">
                                <ChallengeParameter value={642} title="Workouts" />
                                <ChallengeParameter value={37} title="Output (KJ)" />
                                <ChallengeParameter value={1500} title="Calories" />
                                <ChallengeParameter value={1467} title="Meters" />
                                <ChallengeParameter value={98} title="Strokes" />
                                <ChallengeParameter value={85500} title="Time (Hour:Min)" type={TYPES.TIME} />
                                <ChallengeParameter value={37} title="AVG. Wait" />
                                <ChallengeParameter value={50} title="AVG. Cal/Hour" />
                                <ChallengeParameter value={1467} title="AVG. Min/550m" />
                                <ChallengeParameter value={98} title="AVG. SPM" />
                            </div>
                            <div className="achievements">
                                <div className="achivements-title">Recent Achievements</div>
                                <AchievementList />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

ProfileOverviewUI.propTypes = {
    currentTime: PropTypes.string,
    clickTime: PropTypes.func
};

ProfileOverviewUI.defaultProps = {
    currentTime: CONSTANTS.TIME_TYPE.ALL,
    clickTime: () => {}
};
export default ProfileOverviewUI;
