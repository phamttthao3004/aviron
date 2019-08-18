import React from 'react';
import { shallow } from 'enzyme';
import Equipment from './equipment';

describe("Equipment", () => {
  it("Render Equipment component", () => {
    shallow(<Equipment />);
  });
});