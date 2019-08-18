import React from 'react';

const MembershipUI = () => {
    return (
        <div id="membership-page">
            <div className="container">
                <div className="membership-content">
                    <div className="info">
                        <p>You’ll be charged $19.49 + tax per month.</p>
                        <p>Cancel your Membership at any time.</p>
                    </div>
                    <div className="warning">
                        <div>
                            <i className="icon-ic_warning_24px" />
                            <span>Transaction expired: over 10 munites for transaction</span>
                        </div>
                    </div>
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
                    <br />
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
                            By starting my membership, I confirm that I have read and agree to the Peloton Terms of Service, Privacy Policy, and Membership Terms, and I
                            authorize Peloton to charge my payment method for the monthly membership as described above.
                        </label>
                    </div>
                    <button className="btn" type="button">
                        Start your membership
                    </button>
                </div>
            </div>
        </div>
    );
};
export default MembershipUI;
