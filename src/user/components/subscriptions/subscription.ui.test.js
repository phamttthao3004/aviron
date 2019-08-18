import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import SubscriptionUI from './subscription.ui';

describe('Subscription UI', () => {
    it('Render Subscription UI component', () => {
        const props = { data: undefined, state: undefined, onChange: undefined, onSearch: undefined, setOpenAdd: undefined, setOpenCancel: undefined };
        const com = shallow(<SubscriptionUI {...props} />);
        expect(shallowToJson(com)).toMatchSnapshot();
    });
});
