import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Current_Position from './Current_Position';

describe('Current_Position', () => {
  let props;
  let shallowCurrent_Position;
  let renderedCurrent_Position;
  let mountedCurrent_Position;

  const shallowTestComponent = () => {
    if (!shallowCurrent_Position) {
      shallowCurrent_Position = shallow(<Current_Position {...props} />);
    }
    return shallowCurrent_Position;
  };

  const renderTestComponent = () => {
    if (!renderedCurrent_Position) {
      renderedCurrent_Position = render(<Current_Position {...props} />);
    }
    return renderedCurrent_Position;
  };

  const mountTestComponent = () => {
    if (!mountedCurrent_Position) {
      mountedCurrent_Position = mount(<Current_Position {...props} />);
    }
    return mountedCurrent_Position;
  };  

  beforeEach(() => {
    props = {};
    shallowCurrent_Position = undefined;
    renderedCurrent_Position = undefined;
    mountedCurrent_Position = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
