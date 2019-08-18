import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import EquipmentAnalysisTableUI from './equipment-analysis-table.ui';

describe('Equipment Analysis Table UI', () => {
    it('Render Equipment Analysis Table UI component', () => {
        const props = { selectAll: undefined, stateTable: undefined, onSearch: undefined, onChangeInput: undefined };
        const com = shallow(<EquipmentAnalysisTableUI {...props} />);
        expect(shallowToJson(com)).toMatchSnapshot();
    });
});
