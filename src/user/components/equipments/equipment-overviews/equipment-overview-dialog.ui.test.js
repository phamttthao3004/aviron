import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import EquipmentOverviewDialogUI from './equipment-overview-dialog.ui';

describe('Equipment Overview Dialog UI', () => {
    it('Render Equipment Overview Dialog UI component', () => {
        const props = { state: undefined, setOpenEdit: undefined };
        const com = shallow(<EquipmentOverviewDialogUI {...props} />);
        expect(shallowToJson(com)).toMatchSnapshot();
    });
});
