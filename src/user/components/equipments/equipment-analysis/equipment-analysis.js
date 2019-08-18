import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import rootAction from '../../../actions/action';
import CONSTANTS from '../../../scripts/apps/constants';
import GLOBAL_FUNCTIONS from '../../../scripts/apps/global-functions';
import EquipmentAnalysisTableUI from './equipment-analysis-table.ui';
import EquipmentAnalysisUI from './equipment-analysis.ui';

const objectData = new (function() {
    const arr = [];
    const nameArr = ['Bao', 'Hoang', 'Thang', 'Nghia', 'Trang', 'Thao', 'Tuyen', 'Anh', 'Thuy', 'Huy'];
    const machineIdArr = ['AT12'];

    for (let i = 0; i < 10; i += 1) {
        const index = GLOBAL_FUNCTIONS.GetRandomInt(9);
        const rand = Math.floor(Math.random() * 100 + 1);
        arr.push({
            id: i + 1,
            name: `${nameArr[index]} Aviron`,
            machine_id: machineIdArr[0] + rand.toString(),
            show: true,
            selected: false
        });
    }
    return arr;
})();

const EquipmentAnalysis = () => {
    const dispatch = useDispatch();
    const equipmentSetState = _data => {
        dispatch(rootAction.equipment.setState(_data));
    };
    const chart = {
        labels: ['January', 'February', 'March', 'April', 'May', 'Jun', 'July'],
        data: [100, 200, 300, 400, 300, 900, 100]
    };
    const [stateTable, setStateTable] = useState({
        data: objectData,
        value_input: null
    });
    const [state, setState] = useState({
        from_date: new Date(),
        to_date: new Date()
    });

    const onChangeTable = dataObj => {
        setStateTable(
            GLOBAL_FUNCTIONS.SetObject(stateTable, {
                data: dataObj
            })
        );
    };
    const onSearch = () => {
        const txt = stateTable.value_input;
        const products = stateTable.data.map(x => {
            const item = { ...x };
            // item.not_in_searching = true;
            item.show = false;
            if ((x.name || '').toLowerCase().contains(txt) || (x.machine_id || '').toLowerCase().contains(txt)) {
                item.show = true;
            }
            return item;
        });

        onChangeTable(products);
    };

    const selectAll = event => {
        const { checked } = event.target;
        const products = stateTable.data.map(x => {
            const item = { ...x };
            item.selected = checked;
            return item;
        });

        onChangeTable(products);
    };

    const onSelect = event => {
        const { checked } = event.target;
        const products = stateTable.data.map(x => {
            const item = { ...x };
            if (x.id === +event.target.name) item.selected = checked;
            return item;
        });

        onChangeTable(products);
    };

    const onChangeInput = event => {
        setStateTable(
            GLOBAL_FUNCTIONS.SetObject(stateTable, {
                value_input: event.target.value
            })
        );
    };

    const onChangeRange = event => {
        setState(
            GLOBAL_FUNCTIONS.SetObject(state, {
                [event.target.childNodes[0].name]: event.date
            })
        );
    };
    const onSearchRange = () => {
        // console.log(state.from_date, state.to_date);
    };
    useEffect(() => {
        equipmentSetState({ current_tab: CONSTANTS.EQUIPMENT_PAGE.CURRENT_TAB.EQUIPMENT_ANALYSIS });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const propsTableUI = {
        stateTable,
        selectAll,
        onSelect,
        onSearch,
        onChangeInput
    };
    const propsUI = {
        data: chart,
        state,
        onChange: onChangeRange,
        onSearchRange
    };

    return (
        <div id="equipment-analysis-page" className="container">
            <EquipmentAnalysisTableUI {...propsTableUI} />
            <EquipmentAnalysisUI {...propsUI} />
        </div>
    );
};
export default EquipmentAnalysis;
