import React from 'react';
import PropTypes from 'prop-types';
import CONSTANTS from '../../scripts/apps/constants';

const EquipmentUI = props => {
    const { currentTab, clickElement } = props;
    return (
        <div>
            <div className="container-fluid">
                <ul>
                    <li
                        role="presentation"
                        className={`pointer ${currentTab === CONSTANTS.EQUIPMENT_PAGE.CURRENT_TAB.EQUIPMENT_OVERVIEW ? 'active' : ''}`}
                        onClick={clickElement.bind(this, CONSTANTS.EQUIPMENT_PAGE.CURRENT_TAB.EQUIPMENT_OVERVIEW)}
                    >
                        <span>OVERVIEW</span>
                    </li>
                    <li
                        role="presentation"
                        className={`pointer ${currentTab === CONSTANTS.EQUIPMENT_PAGE.CURRENT_TAB.EQUIPMENT_ANALYSIS ? 'active' : ''}`}
                        onClick={clickElement.bind(this, CONSTANTS.EQUIPMENT_PAGE.CURRENT_TAB.EQUIPMENT_ANALYSIS)}
                    >
                        <span>ANALYSIS</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

EquipmentUI.propTypes = {
    currentTab: PropTypes.number,
    clickElement: PropTypes.func
};
EquipmentUI.defaultProps = {
    currentTab: CONSTANTS.PROFILE_PAGE.CURRENT_TAB.NONE,
    clickElement: () => {}
};

export default EquipmentUI;
