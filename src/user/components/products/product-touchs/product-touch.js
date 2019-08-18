import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import rootAction from '../../../actions/action';
import CONSTANTS from '../../../scripts/apps/constants';
import ProductTouchUI from './product-touch.ui';

const ProductTouch = props => {
    const dispatch = useDispatch();
    const productSetState = _data => {
        dispatch(rootAction.product.setState(_data));
    };
    const clickBuyNow = () => {
        const { history } = props;
        const path = `${CONSTANTS.NAVIGATION_URL.MEMBERSHIP}/monthly-commercial-membership`;
        history.push({ pathname: path });
    };
    useEffect(() => {
        productSetState({ current_tab: CONSTANTS.PRODUCT_PAGE.CURRENT_TAB.PRODUCT_TOUCH });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return <ProductTouchUI clickBuyNow={clickBuyNow} />;
};
ProductTouch.propTypes = {
    history: PropTypes.instanceOf(Object)
};
ProductTouch.defaultProps = {
    history: {}
};
export default ProductTouch;
