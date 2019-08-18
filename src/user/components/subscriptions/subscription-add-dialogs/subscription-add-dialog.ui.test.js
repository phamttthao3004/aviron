import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import SubscriptionAddDialogUI from './subscription-add-dialog.ui';

describe('Subscription Add Dialog UI', () => {
    it('Render Subscription Add Dialog UI component', () => {
        const props = { state: undefined, setOpenAdd: undefined };
        const com = shallow(<SubscriptionAddDialogUI {...props} />);
        expect(shallowToJson(com)).toMatchSnapshot();
    });
});
