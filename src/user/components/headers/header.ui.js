import React from 'react';
import PropTypes from 'prop-types';
import CONSTANTS from '../../scripts/apps/constants';
import Top from './top';
import NavUI from './nav.ui';

const HeaderUI = props => {
    const { currentPage, clickMenu } = props;
    return (
        <div id="header">
            <Top currentPage={currentPage} clickMenu={clickMenu} />
            <NavUI {...props} />
        </div>
    );
};

HeaderUI.propTypes = {
    currentPage: PropTypes.number,
    clickMenu: PropTypes.func
};
HeaderUI.defaultProps = {
    currentPage: CONSTANTS.SIDEBAR_PAGEID.NONE,
    clickMenu: () => {}
};

export default HeaderUI;
