import React from 'react';

const AchievementList = () => {
    // const { data } = props;
    return (
        <div className="achievements-list">
            <div className="achievements-item">
                <div className="img">
                    <img src="/images/user/no-avatar.png" alt="100,000 Meters" />
                </div>
                <span>100,000 Meters</span>
            </div>
            <div className="achievements-item">
                <div className="img">
                    <img src="/images/user/no-avatar.png" alt="100,000 Meters" />
                </div>
                <span>250,000 Meters</span>
            </div>
            <div className="achievements-item">
                <div className="img">
                    <img src="/images/user/no-avatar.png" alt="100,000 Meters" />
                </div>
                <span>500,000 Meters</span>
            </div>
            <div className="achievements-item">
                <div className="img">
                    <img src="/images/user/no-avatar.png" alt="100,000 Meters" />
                </div>
                <span>One Million Meters</span>
            </div>
        </div>
    );
};
export default AchievementList;
