import React from 'react';
import ProfileWorkoutExercise from './profile-workout-exercise';

const ProfileWorkoutHistory = () => {
    const data = {
        workout_program: {
            title: 'Workout program',
            dayStr: 'May 10',
            output: 642,
            calories: 70,
            time: 30
        },
        the_hunted: {
            title: 'The hunted',
            dayStr: 'May 9',
            output: 55,
            calories: 70,
            time: 30
        },
        head_to_head: {
            title: 'Head to head',
            dayStr: 'May 8',
            output: 55,
            calories: 70,
            time: 30
        }
    };
    return (
        <div className="workout-history">
            <div className="title">
                <i className="icon-notes" />
                Workout history
            </div>
            <ProfileWorkoutExercise {...data.workout_program} />
            <ProfileWorkoutExercise {...data.the_hunted} />
            <ProfileWorkoutExercise {...data.head_to_head} />
        </div>
    );
};
export default ProfileWorkoutHistory;
