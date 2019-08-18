import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import rootAction from '../../actions/action';
import CONSTANTS from '../../scripts/apps/constants';
import SubscriptionUI from './subscription.ui';
import GLOBAL_FUNCTIONS from '../../scripts/apps/global-functions';

const objectData = new (function() {
    const arr = [];
    const nameArr = ['Bao', 'Hoang', 'Thang', 'Nghia', 'Trang', 'Thao', 'Tuyen', 'Anh', 'Thuy', 'Huy'];
    const keuArr = ['HTJ0', 'K157', 'JSUK', '8AA6'];
    const machineIdArr = ['MMY', 'K15', 'BNY', '2D5'];

    for (let i = 0; i < 100; i += 1) {
        const index = GLOBAL_FUNCTIONS.GetRandomInt(9);
        const keu1 = GLOBAL_FUNCTIONS.GetRandomInt(3);
        const keu2 = GLOBAL_FUNCTIONS.GetRandomInt(3);
        const keu3 = GLOBAL_FUNCTIONS.GetRandomInt(3);
        const keu4 = GLOBAL_FUNCTIONS.GetRandomInt(3);
        if (i === 3 || i === 4) {
            arr.push({
                id: i + 1,
                aviron_key: `${keuArr[keu1]}-${keuArr[keu2]}-${keuArr[keu3]}-${keuArr[keu4]}`,
                subscription_type: 'Personal',
                machine_name: '',
                machine_id: '',
                activated: '',
                status: 'Waiting',
                bill_date: ''
            });
        } else {
            arr.push({
                id: i + 1,
                aviron_key: `${keuArr[keu1]}-${keuArr[keu2]}-${keuArr[keu3]}-${keuArr[keu4]}`,
                subscription_type: 'Personal',
                machine_name: `${nameArr[index]} Aviron`,
                machine_id: machineIdArr[keu1] + machineIdArr[keu2] + machineIdArr[keu3] + machineIdArr[keu4],
                activated: '07/03/2019',
                status: 'Active',
                bill_date: '03/09/2019'
            });
        }
    }
    return arr;
})();
const Subscription = () => {
    const dispatch = useDispatch();
    const headerSetState = _data => {
        dispatch(rootAction.header.setState(_data));
    };
    const [data, setData] = useState(objectData);
    const [state, setState] = useState({
        open_add: false,
        open_cancel: false,
        item: {}
    });
    const onChangeTable = dataObj => {
        setData(dataObj);
    };
    const onSearch = (pTxt = '') => {
        const txt = pTxt.toLowerCase().trim();
        const products = data.map(x => {
            const item = { ...x };
            item.not_in_searching = true;
            if (
                (x.machine_name || '').toLowerCase().contains(txt) ||
                (x.machine_id || '').toLowerCase().contains(txt) ||
                (x.aviron_key || '').toLowerCase().contains(txt) ||
                (x.subscription_type || '').toLowerCase().contains(txt)
            ) {
                item.not_in_searching = false;
            }
            return item;
        });
        onChangeTable(products);
    };

    const setOpenAdd = obj => {
        setState(
            GLOBAL_FUNCTIONS.SetObject(state, {
                open_add: !state.open_add,
                item: obj
            })
        );
    };
    const setOpenCancel = obj => {
        setState(
            GLOBAL_FUNCTIONS.SetObject(state, {
                open_cancel: !state.open_cancel,
                item: obj
            })
        );
    };
    useEffect(() => {
        headerSetState({ current_page: CONSTANTS.SIDEBAR_PAGEID.SUBSCRIPTION });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const props = {
        data,
        state,
        onChange: onChangeTable,
        onSearch,
        setOpenAdd,
        setOpenCancel
    };
    return <SubscriptionUI {...props} />;
};

export default Subscription;
