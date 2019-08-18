import React from 'react';
import PropTypes from 'prop-types';
import CONSTANTS from '../../scripts/apps/constants';

const ProductUI = ({ currentTab, clickElement }) => {
    return (
        <div>
            <div className="container-fluid">
                <ul>
                    <li
                        role="presentation"
                        className={`pointer ${currentTab === CONSTANTS.PRODUCT_PAGE.CURRENT_TAB.PRODUCT_IMPACT ? 'active' : ''}`}
                        onClick={clickElement.bind(this, CONSTANTS.PRODUCT_PAGE.CURRENT_TAB.PRODUCT_IMPACT)}
                    >
                        <span>IMPACT SERIES ROWER</span>
                    </li>
                    <li
                        role="presentation"
                        className={`pointer ${currentTab === CONSTANTS.PRODUCT_PAGE.CURRENT_TAB.PRODUCT_TOUCH ? 'active' : ''}`}
                        onClick={clickElement.bind(this, CONSTANTS.PRODUCT_PAGE.CURRENT_TAB.PRODUCT_TOUCH)}
                    >
                        <span>TOUCH SERIES ROWER</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};
ProductUI.propTypes = {
    currentTab: PropTypes.number,
    clickElement: PropTypes.func
};
ProductUI.defaultProps = {
    currentTab: CONSTANTS.PRODUCT_PAGE.CURRENT_TAB.NONE,
    clickElement: () => {}
};
export default ProductUI;
