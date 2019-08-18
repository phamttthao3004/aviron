import React from 'react';
import PropTypes from 'prop-types';

const ProductTouchUI = ({ clickBuyNow }) => {
    return (
        <div className="aviron-product-page">
            <div className="container">
                <p className="impact-summary">
                    <b>TOUCH SERIES ROWER (TSPA)</b> is already installed. Realplayer is a free download as well. There are other free products such as Winamp (Windows
                    only). One important feature you want to look for when choosing an audio player beyond what is packaged with your operating system is the sound
                    filtering capabilities.
                </p>
                <div className="row">
                    <div className="col-md-7 col-xs-12">
                        <div className="box-buy buy-tspa-5">
                            <p>TSPA + 5 YEARS COMMERCIAL MEMBERSHIP</p>
                            <p>
                                There are other free products such as Winamp (Windows only). One important feature you want to look for when choosing an audio player
                                beyond what is packaged with your operating system is the sound filtering capabilities.
                            </p>
                            <br />
                            <p>
                                One important feature you want to look for when choosing an audio player beyond what is packaged with your operating system is the sound
                                filtering capabilities.
                            </p>
                            <br />
                            <span className="pointer" role="presentation">
                                Add to cart
                            </span>
                            <img src="/images/user/tspa-5.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-md-5 col-xs-12">
                        <div className="box-buy">
                            <p>MONTHLY COMMERCIAL MEMBERSHIP</p>
                            <p>
                                Point of Sale hardware, the till at a shop check out, has become very complex over the past ten years. Modern POS hardware includes the
                                cash till, bar-code readers, scales, belts, communications system and modem.
                            </p>
                            <br />
                            <p>When there is an electricity supply cut, large stores have little option about closing. </p>
                            <br />
                            <span className="pointer" onClick={clickBuyNow} role="presentation">
                                Buy now
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
ProductTouchUI.propTypes = {
    clickBuyNow: PropTypes.func
};
ProductTouchUI.defaultProps = {
    clickBuyNow: () => {}
};
export default ProductTouchUI;
