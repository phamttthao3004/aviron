import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TopUI from './top.ui';
import CONSTANTS from '../../scripts/apps/constants';

const Top = props => {
    const { currentPage, clickMenu } = props;
    const [open, setOpen] = useState(false);
    const LogOut = () => {
        window.ClearAllLocalStorage();
        window.location.href = '/login.html';
    };
    const propsTop = {
        currentPage,
        clickMenu,
        open,
        setOpen: () => setOpen(!open),
        LogOut
    };
    return <TopUI {...propsTop} />;
};
Top.propTypes = {
    currentPage: PropTypes.number,
    clickMenu: PropTypes.func
};
Top.defaultProps = {
    currentPage: CONSTANTS.SIDEBAR_PAGEID.NONE,
    clickMenu: () => {}
};

export default Top;
