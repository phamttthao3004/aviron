import React from 'react';
import PropTypes from 'prop-types';

const CheckoutInformationUI = ({ clickElement }) => {
    return (
        <div className="checkout-content">
            <div className="title">Shipping information</div>
            <div className="row">
                <div className="col-sm-6 col-xs-12">
                    <p>First Name</p>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="" />
                    </div>
                </div>
                <div className="col-sm-6 col-xs-12">
                    <p>Last Name</p>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="" />
                    </div>
                </div>
            </div>
            <p>Phone</p>
            <div className="input-group">
                <span className="input-group-addon" id="basic-addon2">
                    +1
                </span>
                <input type="text" className="form-control" aria-describedby="basic-addon2" placeholder="" />
            </div>
            <p>Address</p>
            <div className="input-group">
                <input type="text" className="form-control" aria-describedby="basic-addon2" placeholder="" />
            </div>
            <p>Apt, Suite</p>
            <div className="input-group">
                <input type="text" className="form-control" aria-describedby="basic-addon2" placeholder="" />
            </div>
            <div className="row">
                <div className="col-sm-4 col-xs-12">
                    <p>City</p>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="" />
                    </div>
                </div>
                <div className="col-sm-4 col-xs-12">
                    <p>State/Province</p>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="" />
                    </div>
                </div>
                <div className="col-sm-4 col-xs-12">
                    <p>Zip/Postal code</p>
                    <div className="input-group">
                        <input type="text" className="form-control" aria-describedby="basic-addon2" placeholder="" />
                    </div>
                </div>
            </div>
            <p>Country</p>
            <div className="input-group">
                <input type="text" className="form-control" placeholder="" />
            </div>
            <div className="row">
                <div className="col-xs-6">
                    <button className="btn btn-buy-more" type="button">
                        Buy more
                    </button>
                </div>
                <div className="col-xs-6 text-right">
                    <button className="btn btn-pay" onClick={clickElement} type="button">
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};
CheckoutInformationUI.propTypes = {
    clickElement: PropTypes.func
};
CheckoutInformationUI.defaultProps = {
    clickElement: () => {}
};
export default CheckoutInformationUI;
