import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Footer from './footer';

describe('Footer', () => {
    it('Render Footer component', () => {
        const com = shallow(<Footer />);
        expect(shallowToJson(com)).toMatchSnapshot();
    });
});
