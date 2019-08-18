import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import EquipmentOverviewTableUI from './equipment-overview-table.ui';

describe('Equipment Overview Table UI', () => {
    it('Render Equipment Overview Table UI component', () => {
        const props = { data: undefined, setOpenEdit: undefined, onChange: undefined, onSearch: undefined };
        const com = shallow(<EquipmentOverviewTableUI {...props} />);
        expect(shallowToJson(com)).toMatchSnapshot();
    });
});
