import React from 'react';
import PropTypes from 'prop-types';
import CONSTANTS from '../../scripts/apps/constants';
import CmsPopover, { PLACEMENTS } from '../../custom-elements/cms-popovers/cms-popover';
import CartBox from '../shared/cart-box';

const NavUI = props => {
    const { currentPage, clickMenu, openCart, setOpenCart, setBack } = props;
    return (
        <div className="pc-nav">
            <div className="container-fluid">
                {currentPage !== CONSTANTS.SIDEBAR_PAGEID.SUBSCRIPTION &&
                currentPage !== CONSTANTS.SIDEBAR_PAGEID.RECEIPT &&
                currentPage !== CONSTANTS.SIDEBAR_PAGEID.PRODUCT &&
                currentPage !== CONSTANTS.SIDEBAR_PAGEID.MEMBERSHIP &&
                currentPage !== CONSTANTS.SIDEBAR_PAGEID.CHECKOUT ? (
                    <ul>
                        <li
                            role="presentation"
                            className={currentPage === CONSTANTS.SIDEBAR_PAGEID.PROFILE ? 'active' : ''}
                            onClick={clickMenu.bind(this, CONSTANTS.SIDEBAR_PAGEID.PROFILE)}
                            onKeyDown={() => {}}
                        >
                            <span>
                                <i className="icon-single-01-2" />
                                <p>profile</p>
                            </span>
                        </li>
                        <li
                            role="presentation"
                            className={currentPage === CONSTANTS.SIDEBAR_PAGEID.EQUIPMENT ? 'active' : ''}
                            onClick={clickMenu.bind(this, CONSTANTS.SIDEBAR_PAGEID.EQUIPMENT)}
                            onKeyDown={() => {}}
                        >
                            <span>
                                <i className="icon-layout-11" />
                                <p>equipment</p>
                            </span>
                        </li>
                    </ul>
                ) : null}
                {currentPage === CONSTANTS.SIDEBAR_PAGEID.SUBSCRIPTION ? <div className="nav-title">Subscription</div> : null}
                {currentPage === CONSTANTS.SIDEBAR_PAGEID.RECEIPT ? <div className="nav-title">Receipt</div> : null}
                {currentPage === CONSTANTS.SIDEBAR_PAGEID.PRODUCT ? (
                    <div className="container relative">
                        <button className="btn btn-back" type="button" name="button" onClick={setBack}>
                            <i className="icon-left-open-big" />
                            <span>Back</span>
                        </button>
                        <div className="nav-title">Aviron Products</div>
                    </div>
                ) : null}
                {currentPage === CONSTANTS.SIDEBAR_PAGEID.MEMBERSHIP ? (
                    <div className="container relative">
                        <button className="btn btn-back" type="button" name="button" onClick={setBack}>
                            <i className="icon-left-open-big" />
                            <span>Back</span>
                        </button>
                        <div className="nav-title">Monthly personal membership</div>
                    </div>
                ) : null}
                {currentPage === CONSTANTS.SIDEBAR_PAGEID.CHECKOUT ? (
                    <div className="container relative">
                        <button className="btn btn-back" type="button" name="button" onClick={setBack}>
                            <i className="icon-left-open-big" />
                            <span>Back</span>
                        </button>
                        <div className="nav-title">CHECKOUT</div>
                    </div>
                ) : null}
            </div>
            <div id="cart">
                <div role="presentation" className="pc-nav-cart-info" onClick={setOpenCart}>
                    <i className="icon-cart" />
                    <p>
                        Cart<span>1</span>
                    </p>
                </div>
                {currentPage !== CONSTANTS.SIDEBAR_PAGEID.PRODUCT &&
                currentPage !== CONSTANTS.SIDEBAR_PAGEID.CHECKOUT &&
                currentPage !== CONSTANTS.SIDEBAR_PAGEID.MEMBERSHIP ? (
                    <span onClick={clickMenu.bind(this, CONSTANTS.SIDEBAR_PAGEID.PRODUCT)} role="presentation" className="btnBuyNow">
                        Buy now
                    </span>
                ) : null}
            </div>
            <CmsPopover placement={PLACEMENTS.BOTTOM} onClose={setOpenCart} className="popover-cart" anchorId="nav-account-setting" open={openCart}>
                <div className="aviron-cart-detail">
                    <CartBox />
                    <button
                        className="check-out"
                        type="button"
                        onClick={() => {
                            clickMenu(CONSTANTS.SIDEBAR_PAGEID.CHECKOUT);
                            setOpenCart();
                        }}
                    >
                        CHECK OUT
                    </button>
                </div>
            </CmsPopover>
        </div>
    );
};

NavUI.propTypes = {
    currentPage: PropTypes.number,
    clickMenu: PropTypes.func,
    openCart: PropTypes.bool,
    setOpenCart: PropTypes.func,
    setBack: PropTypes.func
};
NavUI.defaultProps = {
    currentPage: CONSTANTS.SIDEBAR_PAGEID.NONE,
    clickMenu: () => {},
    openCart: false,
    setOpenCart: () => {},
    setBack: () => {}
};

export default NavUI;
