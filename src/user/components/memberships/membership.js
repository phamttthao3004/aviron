import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import rootAction from '../../actions/action';
import CONSTANTS from '../../scripts/apps/constants';
import MembershipUI from './membership.ui';

const Membership = () => {
    // const { match = {} } = props;
    const dispatch = useDispatch();
    const headerSetState = _data => {
        dispatch(rootAction.header.setState(_data));
    };
    useEffect(() => {
        headerSetState({ current_page: CONSTANTS.SIDEBAR_PAGEID.MEMBERSHIP });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return <MembershipUI />;
};
export default Membership;
