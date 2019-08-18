import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import rootAction from '../../actions/action';
import CONSTANTS from '../../scripts/apps/constants';
import CheckoutUI from './checkout.ui';

const Checkout = () => {
    // const { match = {} } = props;
    const dispatch = useDispatch();
    const headerSetState = _data => {
        dispatch(rootAction.header.setState(_data));
    };
    useEffect(() => {
        headerSetState({ current_page: CONSTANTS.SIDEBAR_PAGEID.CHECKOUT });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return <CheckoutUI />;
};
export default Checkout;
