import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Fondo from './Fondo';

describe('Fondo', () => {
  let props;
  let shallowFondo;
  let renderedFondo;
  let mountedFondo;

  const shallowTestComponent = () => {
    if (!shallowFondo) {
      shallowFondo = shallow(<Fondo {...props} />);
    }
    return shallowFondo;
  };

  const renderTestComponent = () => {
    if (!renderedFondo) {
      renderedFondo = render(<Fondo {...props} />);
    }
    return renderedFondo;
  };

  const mountTestComponent = () => {
    if (!mountedFondo) {
      mountedFondo = mount(<Fondo {...props} />);
    }
    return mountedFondo;
  };  

  beforeEach(() => {
    props = {};
    shallowFondo = undefined;
    renderedFondo = undefined;
    mountedFondo = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
