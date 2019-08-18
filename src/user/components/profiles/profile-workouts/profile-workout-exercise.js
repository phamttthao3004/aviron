import React from 'react';
import PropTypes from 'prop-types';
import ChallengeParameter, { TYPES } from '../../shared/challenge-parameter';

const ProfileWorkoutExercise = ({ title, dayStr, output, calories, time }) => {
    return (
        <div className="workout-history-per-day">
            <p className="exercise">
                {title} <span>{dayStr}</span>
            </p>
            <ul>
                <li>
                    <ChallengeParameter value={output} title="Output (KJ)" />
                </li>
                <li>
                    <ChallengeParameter value={calories} title="Calories" />
                </li>
                <li>
                    <ChallengeParameter value={time} title="MIN:SEC" type={TYPES.MINUTE} />
                </li>
            </ul>
        </div>
    );
};
ProfileWorkoutExercise.propTypes = {
    title: PropTypes.string,
    dayStr: PropTypes.string,
    output: PropTypes.number,
    calories: PropTypes.number,
    time: PropTypes.number
};

ProfileWorkoutExercise.defaultProps = {
    title: '',
    dayStr: '',
    output: 0,
    calories: 0,
    time: 0
};
export default ProfileWorkoutExercise;
