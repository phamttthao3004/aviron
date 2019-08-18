import React from 'react';

const CartBox = () => {
    return (
        <div className="cart-box">
            <p className="type-product">ISPA + PERSONAL MEMBERSHIP</p>
            <div className="cart-input">
                <span className="color-black">Quantity</span>
                <input type="number" value={1} />
            </div>
            <p>1 Aviron machine</p>
            <p>1 Welcome gift</p>
            <p>1 Year personal subscription</p>
            <div className="line" />
            <div className="row price">
                <div className="col-xs-6">Subtotal</div>
                <div className="col-xs-6 text-right">$2,245.00</div>
                <div className="col-xs-6">Delivery</div>
                <div className="col-xs-6 text-right">$55.00</div>
                <div className="col-xs-6">Tax</div>
                <div className="col-xs-6 text-right">--</div>
                <div className="col-xs-12">Enter promo code</div>
                <div className="col-xs-12">
                    <div className="cart-input">
                        <input type="text" value="" />
                        <button type="button">APPLY</button>
                    </div>
                </div>
            </div>
            <div className="line" />
            <div className="row price">
                <div className="col-xs-6">
                    <b>Estimated Total:</b>
                </div>
                <div className="col-xs-6 text-right">
                    <b>$2,300.00</b>
                </div>
            </div>
        </div>
    );
};
export default CartBox;
