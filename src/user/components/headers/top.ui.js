import React from 'react';
import PropTypes from 'prop-types';
import CONSTANTS from '../../scripts/apps/constants';
import CmsPopover, { PLACEMENTS } from '../../custom-elements/cms-popovers/cms-popover';

const TopUI = ({ currentPage, clickMenu, open, setOpen, LogOut }) => {
    return (
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand pointer" href="/">
                        <img src="/images/user/logo.png" alt="Aviron logo" />
                    </a>
                    <div className="navbar-account">
                        <a className="navbar-account-avatar pointer" href="/">
                            <img src="/images/user/no-avatar.png" alt="Avatar" />
                            <span>Larry Garza</span>
                        </a>
                        <span role="presentation" id="nav-account-setting" onClick={setOpen}>
                            <i className="icon-ic_more_horiz_48px" />
                        </span>
                        <CmsPopover placement={PLACEMENTS.BOTTOM} onClose={setOpen} className="popover-account" anchorId="nav-account-setting" open={open}>
                            <div style={{ width: '152px', height: '109px' }}>
                                <ul className="nav-list-item">
                                    <li
                                        role="presentation"
                                        className={currentPage === CONSTANTS.SIDEBAR_PAGEID.SUBSCRIPTION ? 'active' : ''}
                                        onClick={() => {
                                            clickMenu(CONSTANTS.SIDEBAR_PAGEID.SUBSCRIPTION);
                                            setOpen();
                                        }}
                                    >
                                        <span>Subscription</span>
                                    </li>
                                    <li
                                        role="presentation"
                                        className={currentPage === CONSTANTS.SIDEBAR_PAGEID.RECEIPT ? 'active' : ''}
                                        onClick={() => {
                                            clickMenu(CONSTANTS.SIDEBAR_PAGEID.RECEIPT);
                                            setOpen();
                                        }}
                                    >
                                        <span>Receipt</span>
                                    </li>
                                    <li role="presentation" onClick={LogOut}>
                                        <span>Log out</span>
                                    </li>
                                </ul>
                            </div>
                        </CmsPopover>
                    </div>
                </div>
            </div>
        </nav>
    );
};
TopUI.propTypes = {
    currentPage: PropTypes.number,
    clickMenu: PropTypes.func,
    open: PropTypes.bool,
    setOpen: PropTypes.func,
    LogOut: PropTypes.func
};

TopUI.defaultProps = {
    currentPage: CONSTANTS.SIDEBAR_PAGEID.NONE,
    clickMenu: () => {},
    open: false,
    setOpen: () => {},
    LogOut: () => {}
};
export default TopUI;
