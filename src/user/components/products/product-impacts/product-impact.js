import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import rootAction from '../../../actions/action';
import CONSTANTS from '../../../scripts/apps/constants';
import ProductImpactUI from './product-impact.ui';

const ProductImpact = props => {
    const dispatch = useDispatch();
    const productSetState = _data => {
        dispatch(rootAction.product.setState(_data));
    };
    const clickBuyNow = () => {
        const { history } = props;
        const path = `${CONSTANTS.NAVIGATION_URL.MEMBERSHIP}/monthly-personal-membership`;
        history.push({ pathname: path });
    };
    useEffect(() => {
        productSetState({ current_tab: CONSTANTS.PRODUCT_PAGE.CURRENT_TAB.PRODUCT_IMPACT });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return <ProductImpactUI clickBuyNow={clickBuyNow} />;
};

ProductImpact.propTypes = {
    history: PropTypes.instanceOf(Object)
};
ProductImpact.defaultProps = {
    history: {}
};
export default ProductImpact;
