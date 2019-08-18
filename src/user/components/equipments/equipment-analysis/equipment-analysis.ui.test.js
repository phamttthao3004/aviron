import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import EquipmentAnalysisUI from './equipment-analysis.ui';

describe('Equipment Analysis UI', () => {
    it('Render Equipment Analysis UI component', () => {
        const props = { data: undefined, state: undefined, onChange: undefined, onSearchRange: undefined };
        const com = shallow(<EquipmentAnalysisUI {...props} />);
        expect(shallowToJson(com)).toMatchSnapshot();
    });
});
