import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import SubscriptionCancelDialogUI from './subscription-cancel-dialog.ui';

describe('Subscription Cancel Dialog UI', () => {
    it('Render Subscription Cancel Dialog UI component', () => {
        const props = { state: undefined, setOpenCancel: undefined };
        const com = shallow(<SubscriptionCancelDialogUI {...props} />);
        expect(shallowToJson(com)).toMatchSnapshot();
    });
});
