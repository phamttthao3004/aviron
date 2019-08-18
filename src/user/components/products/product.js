import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import rootAction from '../../actions/action';
import CONSTANTS from '../../scripts/apps/constants';
import ProductUI from './product.ui';
import ProductImpact from './product-impacts/product-impact';
import ProductTouch from './product-touchs/product-touch';

const Product = props => {
    const current_tab = useSelector(state => state.product.current_tab);
    const dispatch = useDispatch();
    const headerSetState = _data => {
        dispatch(rootAction.header.setState(_data));
    };
    const clickElement = tabId => {
        const { history } = props;
        switch (tabId) {
            case CONSTANTS.PRODUCT_PAGE.CURRENT_TAB.PRODUCT_IMPACT:
                history.push({ pathname: CONSTANTS.NAVIGATION_URL.PRODUCT_IMPACT });
                break;
            case CONSTANTS.PRODUCT_PAGE.CURRENT_TAB.PRODUCT_TOUCH:
                history.push({ pathname: CONSTANTS.NAVIGATION_URL.PRODUCT_TOUCH });
                break;
            default:
                break;
        }
    };
    useEffect(() => {
        headerSetState({ current_page: CONSTANTS.SIDEBAR_PAGEID.PRODUCT });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const propsUI = {
        currentTab: current_tab,
        clickElement
    };
    return (
        <div id="aviron-product-page">
            <div className="sub-head-tab">
                <ProductUI {...propsUI} />
                <Route path={CONSTANTS.NAVIGATION_URL.PRODUCT_IMPACT} component={ProductImpact} />
                <Route path={CONSTANTS.NAVIGATION_URL.PRODUCT_TOUCH} component={ProductTouch} />
            </div>
        </div>
    );
};
Product.propTypes = {
    history: PropTypes.instanceOf(Object)
};
Product.defaultProps = {
    history: {}
};
export default Product;
