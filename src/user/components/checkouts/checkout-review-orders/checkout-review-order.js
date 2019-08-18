import React from 'react';
import PropTypes from 'prop-types';
import CONSTANTS from '../../../scripts/apps/constants';
import CheckoutReviewOrderUI from './checkout-review-order.ui';

const CheckoutReviewOrder = props => {
    const { history } = props;
    const goBack = () => {
        history.push({ pathname: CONSTANTS.NAVIGATION_URL.CHECKOUT_PAYMENT_METHOD });
    };
    return <CheckoutReviewOrderUI goBack={goBack} />;
};
CheckoutReviewOrder.propTypes = {
    history: PropTypes.instanceOf(Object)
};
CheckoutReviewOrder.defaultProps = {
    history: {}
};
export default CheckoutReviewOrder;
