import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import ChallengeParameter, { TYPES } from '../../shared/challenge-parameter';
import ProfileWorkoutHistory from './profile-workout-history.ui';

const ProfileWorkoutUI = ({ labels, data }) => {
    const chartSettings = {
        data: {
            labels,
            datasets: [
                {
                    label: '',
                    fill: true,
                    data,
                    backgroundColor: ['#CD1E35'],
                    pointBackgroundColor: '#CD1E35',
                    pointHoverRadius: 0,
                    pointHitRadius: 10,
                    pointRadius: 0
                }
            ]
        },
        options: {
            elements: {
                line: {
                    tension: 0
                }
            },
            responsive: true
        }
    };
    return (
        <div id="profile-workout-page">
            <div className="container">
                <div className="row">
                    <div className="workout-info">
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
                        <div className="container-chart">
                            <Line data={chartSettings.data} options={chartSettings.options} />
                        </div>
                    </div>
                    <ProfileWorkoutHistory />
                </div>
            </div>
        </div>
    );
};
ProfileWorkoutUI.propTypes = {
    labels: PropTypes.arrayOf(PropTypes.string),
    data: PropTypes.arrayOf(PropTypes.number)
};

ProfileWorkoutUI.defaultProps = {
    labels: [],
    data: []
};
export default ProfileWorkoutUI;
