import React from 'react';
import PropTypes from 'prop-types';
import CONSTANTS from '../../../scripts/apps/constants';
import CheckoutInformationUI from './checkout-information.ui';

const CheckoutInformation = props => {
    const clickElement = () => {
        const { history } = props;
        history.push({ pathname: CONSTANTS.NAVIGATION_URL.CHECKOUT_PAYMENT_METHOD });
    };
    return <CheckoutInformationUI clickElement={clickElement} />;
};
CheckoutInformation.propTypes = {
    history: PropTypes.instanceOf(Object)
};
CheckoutInformation.defaultProps = {
    history: {}
};
export default CheckoutInformation;
