import React from 'react';
import PropTypes from 'prop-types';

const CheckoutReviewOrderUI = ({ goBack }) => {
    return (
        <div className="checkout-content">
            <div className="title">Review order</div>
            <div className="review-content">
                <p>With so many different ways today to find information online, it can sometimes be hard to know where to go to first.</p>
                <p>I want to look at the major and most effective ways to find information online.</p>
                <p>
                    The biggest and most commonly used method is to use a search engine such as : Google, Yahoo, or Msn. All three of these search engines offer similar
                    features. Text search, Image search, Local search, Product search, are a few of the services they offer.
                </p>
                <p>
                    It used to be only a few years ago where Google dominated the Search Engine market. Due largely to the fact that their search technology was the most
                    advanced. Because of the huge investment other companies have put into their search technology, it’s getting harder and harder every day to say which
                    one is really the best. With this in mind I think it comes down more now to which company do you prefer or which layout you like the most. Another
                    method used to find information is through what is called a Web Directory.
                </p>
                <p>Web directories will usually either be relative or general:</p>
                <p>
                    Relative – A relative web directory will contain information and links to websites that are all to do with one topic. An example would be a Weight
                    Loss directory that contains only information and links to sites that have something to do with Weight Loss.
                </p>
                <p>
                    General – A general web directory is a site that will contain links and information to do with all types of categories. It will usually be arranged
                    topically to allow ease of use in finding exactly what you want. The biggest and one of the most used directories is dmoz.org, which contains links
                    and information to thousands of different sites, all arranged into categories.
                </p>
            </div>
            <div className="row">
                <div className="col-xs-6">
                    <button className="btn btn-goback" onClick={goBack} type="button">
                        Back
                    </button>
                </div>
                <div className="col-xs-6 text-right">
                    <button className="btn btn-pay" type="button">
                        Place Order
                    </button>
                </div>
            </div>
        </div>
    );
};
CheckoutReviewOrderUI.propTypes = {
    goBack: PropTypes.func
};
CheckoutReviewOrderUI.defaultProps = {
    goBack: () => {}
};
export default CheckoutReviewOrderUI;
