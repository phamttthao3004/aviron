import React from 'react';
import AchievementList from '../achievement-list/achievement-list';

const ProfileAchievementUI = () => {
    return (
        <div id="profile-achievement-page">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-md-offset-1">
                        <div className="achievements">
                            <div className="achievements-result">
                                You’ve successfully earned <span>5</span> achivements
                            </div>
                            <AchievementList />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ProfileAchievementUI;
