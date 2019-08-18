import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import CONSTANTS from './scripts/apps/constants';
import rootAction from './actions/action';
import MessageBox from './components/shared/message-box';
import Footer from './components/footers/footer';
import Header from './components/headers/header';
import Profile from './components/profiles/profile';
import Equipment from './components/equipments/equipment';
import Subscription from './components/subscriptions/subscription';
import Receipt from './components/receipts/receipt';
import ReceiptDetail from './components/receipts/receipt-details/receipt-detail';
import Product from './components/products/product';
import Membership from './components/memberships/membership';
import Checkout from './components/checkouts/checkout';

const mapStateToProps = state => {
    return {
        is_initiated_page: state.global.is_initiated_page
    };
};
const mapDispatchToProps = dispatch => {
    return {
        globalSetState: _data => dispatch(rootAction.global.setState(_data))
    };
};

class AppConnected extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.GetRootData();
    // }

    // life cycle
    componentDidMount() {}

    componentWillUnmount() {}

    // functions
    GetRootData = () => {
        this.GetUserInfo();
    };

    GetUserInfo = () => {
        const api = window.APIService.Init();
        const handleWhenUserWrong = () => {
            window.ClearAllLocalStorage();
            window.location.href = '/login.html';
        };
        const successFunc = res => {
            const { data } = res;
            const [role] = data.roles;
            if (role !== CONSTANTS.USER.ROLE.NORMAL_USER) {
                handleWhenUserWrong();
            } else {
                const { _id, email, avatar, firstName, lastName } = data;
                const { globalSetState } = this.props;
                globalSetState({
                    is_initiated_page: true,
                    user_id: _id,
                    user_email: email,
                    user_role: role,
                    user_avatar: avatar,
                    user_first_name: firstName,
                    user_last_name: lastName
                });
            }
        };
        const errorFunc = () => {
            handleWhenUserWrong();
        };
        api.callRequest('me', 'get', undefined, successFunc, errorFunc);
    };

    // events

    render() {
        // const { is_initiated_page } = this.props;
        // if (!is_initiated_page) {
        //     return null;
        // }
        return (
            <div className="main">
                <MessageBox />
                <Header />
                <Route path={CONSTANTS.NAVIGATION_URL.PROFILE} component={Profile} />
                <Route path={CONSTANTS.NAVIGATION_URL.EQUIPMENT} component={Equipment} />
                <Route path={CONSTANTS.NAVIGATION_URL.SUBSCRIPTION} component={Subscription} />
                <Route path={CONSTANTS.NAVIGATION_URL.RECEIPT} component={Receipt} exact />
                <Route path={CONSTANTS.NAVIGATION_URL.RECEIPT_DETAIL} component={ReceiptDetail} />
                <Route path={CONSTANTS.NAVIGATION_URL.PRODUCT} component={Product} />
                <Route path={CONSTANTS.NAVIGATION_URL.MEMBERSHIP_SUB} component={Membership} />
                <Route path={CONSTANTS.NAVIGATION_URL.CHECKOUT} component={Checkout} />
                <Footer />
            </div>
        );
    }
}

AppConnected.propTypes = {
    // is_initiated_page: PropTypes.bool,
    globalSetState: PropTypes.func
};
AppConnected.defaultProps = {
    // is_initiated_page: false,
    globalSetState: () => {}
};

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppConnected);
export default withRouter(App);
