import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import rootAction from '../../../actions/action';
import CONSTANTS from '../../../scripts/apps/constants';
import EquipmentOverviewTableUI from './equipment-overview-table.ui';
import EquipmentOverviewDialogUI from './equipment-overview-dialog.ui';
import GLOBAL_FUNCTIONS from '../../../scripts/apps/global-functions';

const objectData = new (function() {
    const arr = [];
    const nameArr = ['Bao', 'Hoang', 'Thang', 'Nghia', 'Trang', 'Thao', 'Tuyen', 'Anh', 'Thuy', 'Huy'];
    const keuArr = ['HTJ0', 'K157', 'JSUK', '8AA6'];
    const machineIdArr = ['MMY', 'K15', 'BNY', '2D5'];

    for (let i = 0; i < 1000; i += 1) {
        const index = GLOBAL_FUNCTIONS.GetRandomInt(9);
        const keu1 = GLOBAL_FUNCTIONS.GetRandomInt(3);
        const keu2 = GLOBAL_FUNCTIONS.GetRandomInt(3);
        const keu3 = GLOBAL_FUNCTIONS.GetRandomInt(3);
        const keu4 = GLOBAL_FUNCTIONS.GetRandomInt(3);
        arr.push({
            id: i + 1,
            equipment_name: `${nameArr[index]} Aviron`,
            machine_id: machineIdArr[keu1] + machineIdArr[keu2] + machineIdArr[keu3] + machineIdArr[keu4],
            model: `${keuArr[keu1]}-${keuArr[keu2]}-${keuArr[keu3]}-${keuArr[keu4]}`,
            last_online: '07/03/2019 14:00',
            app_version: '10.00.31',
            os_version: '10.0.1.0.68'
        });
    }
    return arr;
})();
const EquipmentOverview = () => {
    const dispatch = useDispatch();
    const equipmentSetState = _data => {
        dispatch(rootAction.equipment.setState(_data));
    };
    const [data, setData] = useState(objectData);
    const [state, setState] = useState({
        item_equipment: {},
        open_edit: false
    });
    const onChangeTable = dataObj => {
        setData(dataObj);
    };
    const setOpenEdit = dataObj => {
        setState(
            GLOBAL_FUNCTIONS.SetObject(state, {
                open_edit: !state.open_edit,
                item_equipment: dataObj
            })
        );
    };
    const onSearch = (pTxt = '') => {
        const txt = pTxt.toLowerCase().trim();
        const products = data.map(x => {
            const item = { ...x };
            item.not_in_searching = true;
            if ((x.equipment_name || '').toLowerCase().contains(txt) || (x.machine_id || '').toLowerCase().contains(txt) || (x.model || '').toLowerCase().contains(txt)) {
                item.not_in_searching = false;
            }
            return item;
        });
        onChangeTable(products);
    };
    useEffect(() => {
        equipmentSetState({ current_tab: CONSTANTS.EQUIPMENT_PAGE.CURRENT_TAB.EQUIPMENT_OVERVIEW });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const propsTableUI = {
        data,
        onChange: onChangeTable,
        onSearch,
        setOpenEdit
    };
    const propsDialogUI = {
        state,
        setOpenEdit
    };
    return (
        <div id="equipment-overview">
            <EquipmentOverviewTableUI {...propsTableUI} />
            <EquipmentOverviewDialogUI {...propsDialogUI} />
        </div>
    );
};
export default EquipmentOverview;
