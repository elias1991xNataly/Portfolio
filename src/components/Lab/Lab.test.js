import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Lab from './Lab';

describe('Lab', () => {
  let props;
  let shallowLab;
  let renderedLab;
  let mountedLab;

  const shallowTestComponent = () => {
    if (!shallowLab) {
      shallowLab = shallow(<Lab {...props} />);
    }
    return shallowLab;
  };

  const renderTestComponent = () => {
    if (!renderedLab) {
      renderedLab = render(<Lab {...props} />);
    }
    return renderedLab;
  };

  const mountTestComponent = () => {
    if (!mountedLab) {
      mountedLab = mount(<Lab {...props} />);
    }
    return mountedLab;
  };  

  beforeEach(() => {
    props = {};
    shallowLab = undefined;
    renderedLab = undefined;
    mountedLab = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
