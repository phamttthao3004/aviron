import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import CONSTANTS from '../../scripts/apps/constants';
import rootAction from '../../actions/action';
import ReceiptUI from './receipt.ui';

const objectData = new (function() {
    const arr = [];
    const machineIdArr = ['82-2900-'];

    for (let i = 0; i < 10; i += 1) {
        const rand = Math.floor(Math.random() * 100 + 1);
        arr.push({
            id: i + 1,
            index: i + 1,
            order_date: '07/28/2019',
            order_number: machineIdArr[0] + rand.toString(),
            price: '$53,261.44',
            status: 'Successfull'
        });
    }
    return arr;
})();
const Receipt = props => {
    const dispatch = useDispatch();
    const headerSetState = _data => {
        dispatch(rootAction.header.setState(_data));
    };
    // const [data, setData] = useState(objectData);
    const [data, setData] = useState(objectData);
    const onChangeTable = dataObj => {
        setData(dataObj);
        // setData(dataObj);
    };
    const onSearch = (pTxt = '') => {
        const txt = pTxt.toLowerCase().trim();
        const products = data.map(x => {
            const item = { ...x };
            item.not_in_searching = true;
            if ((x.order_date || '').toLowerCase().contains(txt) || (x.order_number || '').toLowerCase().contains(txt) || (x.status || '').toLowerCase().contains(txt)) {
                item.not_in_searching = false;
            }
            return item;
        });
        onChangeTable(products);
    };

    const setOpenView = obj => {
        const { history } = props;
        const path = `${CONSTANTS.NAVIGATION_URL.RECEIPT}/${obj.id}`;
        history.push({ pathname: path });
    };
    useEffect(() => {
        headerSetState({ current_page: CONSTANTS.SIDEBAR_PAGEID.RECEIPT });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const propsUI = {
        data,
        onSearch,
        onChange: onChangeTable,
        setOpenView
    };
    return (
        <div>
            <ReceiptUI {...propsUI} />
        </div>
    );
};
Receipt.propTypes = {
    history: PropTypes.instanceOf(Object)
    // current_page: PropTypes.number
};
Receipt.defaultProps = {
    history: {}
    // current_page: CONSTANTS.SIDEBAR_PAGEID.NONE
};
export default Receipt;
