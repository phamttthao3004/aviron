import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import CONSTANTS from '../../scripts/apps/constants';
import HeaderUI from './header.ui';
import GetNavigationParam from './header.logic';

const Header = props => {
    const current_page = useSelector(state => state.header.current_page);
    const [openCart, setOpenCart] = useState(false);
    const clickMenu = pageId => {
        const { history } = props;
        const param = GetNavigationParam(pageId);
        history.push(param);
    };
    const setBack = () => {
        const { history } = props;
        history.goBack();
    };
    const propsHeader = {
        currentPage: current_page,
        clickMenu,
        openCart,
        setOpenCart: () => setOpenCart(!openCart),
        setBack
    };
    return <HeaderUI {...propsHeader} />;
};

Header.propTypes = {
    history: PropTypes.instanceOf(Object),
    current_page: PropTypes.number
};
Header.defaultProps = {
    history: {},
    current_page: CONSTANTS.SIDEBAR_PAGEID.NONE
};

export default withRouter(Header);
