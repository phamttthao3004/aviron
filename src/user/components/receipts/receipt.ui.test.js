import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import ReceiptUI from './receipt.ui';

describe('Receipt UI', () => {
    it('Render Receipt UI component', () => {
        const props = { data: [], onChange: undefined, onSearch: undefined, setOpenView: undefined };
        const com = shallow(<ReceiptUI {...props} />);
        expect(shallowToJson(com)).toMatchSnapshot();
    });
});
