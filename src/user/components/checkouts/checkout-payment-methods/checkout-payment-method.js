import React from 'react';
import PropTypes from 'prop-types';
import CONSTANTS from '../../../scripts/apps/constants';
import CheckoutPaymentMethodUI from './checkout-payment-method.ui';

const CheckoutPaymentMethod = props => {
    const { history } = props;
    const clickElement = () => {
        history.push({ pathname: CONSTANTS.NAVIGATION_URL.CHECKOUT_REVIEW_ORDER });
    };
    const goBack = () => {
        history.push({ pathname: CONSTANTS.NAVIGATION_URL.CHECKOUT_INFORMATION });
    };
    return <CheckoutPaymentMethodUI clickElement={clickElement} goBack={goBack} />;
};
CheckoutPaymentMethod.propTypes = {
    history: PropTypes.func
};
CheckoutPaymentMethod.defaultProps = {
    history: {}
};
export default CheckoutPaymentMethod;
