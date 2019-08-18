import React from 'react';
import PropTypes from 'prop-types';

const CheckoutPaymentMethodUI = ({ clickElement, goBack }) => {
    return (
        <div className="checkout-content">
            <div className="title">Payment Method</div>
            <div className="row">
                <div className="col-sm-4 col-xs-12">
                    <p>
                        <b>Credit Card</b>
                    </p>
                </div>
                <div className="col-md-8 col-xs-12 text-right">
                    <p>
                        <img src="/images/user/payment-card.png" alt="" />
                    </p>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-md-6 col-xs-12">
                    <p>Credit Card Number</p>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="" />
                    </div>
                </div>
                <div className="col-md-3 col-xs-6">
                    <p>Exp (MM/YY)</p>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="" />
                    </div>
                </div>
                <div className="col-md-3 col-xs-6">
                    <p>CCV/CVC</p>
                    <div className="input-group">
                        <input type="text" className="form-control" aria-describedby="basic-addon2" placeholder="" />
                        <span className="input-group-addon" id="basic-addon2">
                            <i className="icon-c-question" />
                        </span>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12">
                    <p>Cardholder Name</p>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="" />
                    </div>
                </div>
            </div>
            <div className="checkbox">
                <label htmlFor="confirm">
                    <input type="checkbox" value="" name="confirm" />
                    Billing address same as shipping
                </label>
            </div>
            <br />
            <div className="row">
                <div className="col-xs-6">
                    <button className="btn btn-goback" onClick={goBack} type="button">
                        Back
                    </button>
                </div>
                <div className="col-xs-6 text-right">
                    <button className="btn btn-pay" onClick={clickElement} type="button">
                        Review order
                    </button>
                </div>
            </div>
        </div>
    );
};
CheckoutPaymentMethodUI.propTypes = {
    clickElement: PropTypes.func,
    goBack: PropTypes.func
};
CheckoutPaymentMethodUI.defaultProps = {
    clickElement: () => {},
    goBack: () => {}
};
export default CheckoutPaymentMethodUI;
