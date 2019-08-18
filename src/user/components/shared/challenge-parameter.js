import React from 'react';
import PropTypes from 'prop-types';
import GLOBAL_FUNCTIONS from '../../scripts/apps/global-functions';

export const TYPES = new (function() {
    this.NUMBER = 'number';
    this.TIME = 'time';
    this.MINUTE = 'minute';
})();

const ChallengeParameter = ({ value, title, type }) => {
    const GetTotalTimeStr = totalTime => {
        const hour = Math.floor(totalTime / 3600);
        const min = Math.floor((totalTime - hour * 3600) / 60);
        const sec = Math.floor(totalTime - min * 60 - hour * 3600);
        return {
            hour,
            min,
            sec
        };
    };
    const ConvertValue = (pValue, pType) => {
        if (pType === TYPES.NUMBER) {
            return GLOBAL_FUNCTIONS.FormatNumToThousand(pValue);
        }
        const time = GetTotalTimeStr(pValue);
        if (pType === TYPES.MINUTE) {
            return (
                <React.Fragment>
                    {time.min.toString().padStart(2, '0')}:{time.sec.toString().padStart(2, '0')}
                </React.Fragment>
            );
        }
        return (
            <React.Fragment>
                {time.hour}
                <sup>h</sup> {time.min}
                <sup>m</sup>
            </React.Fragment>
        );
    };

    return (
        <div className="result-item">
            <p>{title}</p>
            <p>{ConvertValue(value, type)}</p>
        </div>
    );
};
ChallengeParameter.propTypes = {
    value: PropTypes.number,
    title: PropTypes.string,
    type: PropTypes.string
};

ChallengeParameter.defaultProps = {
    value: 0,
    title: '',
    type: TYPES.NUMBER
};
export default ChallengeParameter;
