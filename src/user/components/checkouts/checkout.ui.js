import React from 'react';
import { Route } from 'react-router-dom';
import CONSTANTS from '../../scripts/apps/constants';
import CartBox from '../shared/cart-box';
import CheckoutInformation from './checkout-informations/checkout-information';
import CheckoutPaymentMethod from './checkout-payment-methods/checkout-payment-method';
import CheckoutReviewOrder from './checkout-review-orders/checkout-review-order';

const CheckoutUI = () => {
    return (
        <div id="checkout-page" className="payment-container">
            <div className="container">
                <div className="warning">
                    <div>
                        <i className="icon-ic_warning_24px" />
                        <span>Transaction expired: over 10 munites for transaction</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-7 col-xs-12">
                        <Route path={CONSTANTS.NAVIGATION_URL.CHECKOUT_INFORMATION} component={CheckoutInformation} />
                        <Route path={CONSTANTS.NAVIGATION_URL.CHECKOUT_PAYMENT_METHOD} component={CheckoutPaymentMethod} />
                        <Route path={CONSTANTS.NAVIGATION_URL.CHECKOUT_REVIEW_ORDER} component={CheckoutReviewOrder} />
                    </div>
                    <div className="col-sm-5 col-xs-12">
                        <div className="aviron-cart-detail">
                            <div className="title">SUMMARY</div>
                            <CartBox />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CheckoutUI;
