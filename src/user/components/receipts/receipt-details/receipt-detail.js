import React from 'react';
import PropTypes from 'prop-types';

const ReceiptDetail = props => {
    const { match = {} } = props;

    const setBack = () => {
        const { history } = props;
        history.goBack();
    };

    return (
        <div id="receipt-detail-page">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-xs-6">
                        <button className="btn btn-back" onClick={setBack} type="button" name="button">
                            <i className="icon-left-open-big" />
                            <span>Back</span>
                        </button>
                    </div>
                    <div className="col-md-6 col-xs-6 text-right">
                        <button className="btn btn-print" type="button" name="button">
                            <span>Print</span>
                        </button>
                    </div>
                </div>
                <div className="order">
                    <span>
                        Order number: <b>{match.params.id}</b>
                    </span>
                    <span>
                        Order date: <b>{match.params.id}</b>
                    </span>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="line" />
                        <div className="order-detail">
                            <div className="shipping-details">
                                <p className="title">Shipping details</p>
                                <span className="note">Address</span>
                                <p>234 Boluver Washington DC, USA</p>
                                <br />
                                <span className="note">Note</span>
                                <p>Harness The Power Of Words In</p>
                            </div>
                            <div className="payment-details">
                                <p className="title">payment details</p>
                                <p>Credit Card Number: 2300-XXXX-XXXX-XXXX-XXXX</p>
                            </div>
                        </div>
                        <div className="line" />
                        <div className="order-detail purchase">
                            <p className="title">Your purchase</p>

                            <table border="0" cellPadding="0">
                                <tbody>
                                    <tr>
                                        <td>
                                            <img src="/images/user/no-avatar.png" alt="" />
                                            {/* <p className="type-member">MONTHLY COMMERCIAL MEMBERSHIP</p> */}
                                            <p className="type-member">Aviron machine</p>
                                            <span>1 Aviron machine</span>
                                            <span>1 Welcome Gift</span>
                                            <span>1 Year personal Subscription</span>
                                        </td>
                                        <td>
                                            <span>Qty: 1</span>
                                        </td>
                                        <td align="right">
                                            <span>$2,245.00</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="line" />
                        <div className="order-detail">
                            <div className="order-total">
                                <table border="0" cellPadding="0">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <span>Subtotal:</span>
                                            </td>
                                            <td align="right">
                                                <span>$2,245.00</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span>Shipping:</span>
                                            </td>
                                            <td align="right">
                                                <span>$55.00</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span>Tax:</span>
                                            </td>
                                            <td align="right">
                                                <span>$100.00</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span>Promo code:</span>
                                            </td>
                                            <td align="right">
                                                <span>None</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span>
                                                    <b>Order total:</b>
                                                </span>
                                            </td>
                                            <td align="right">
                                                <span>$2,400.00</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
ReceiptDetail.propTypes = {
    match: PropTypes.instanceOf(Object),
    history: PropTypes.instanceOf(Object)
};
ReceiptDetail.defaultProps = {
    match: {},
    history: {}
};
export default ReceiptDetail;
