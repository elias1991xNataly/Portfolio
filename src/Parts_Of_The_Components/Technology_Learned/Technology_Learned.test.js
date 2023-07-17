import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Technology_Learned from './Technology_Learned';

describe('Technology_Learned', () => {
  let props;
  let shallowTechnology_Learned;
  let renderedTechnology_Learned;
  let mountedTechnology_Learned;

  const shallowTestComponent = () => {
    if (!shallowTechnology_Learned) {
      shallowTechnology_Learned = shallow(<Technology_Learned {...props} />);
    }
    return shallowTechnology_Learned;
  };

  const renderTestComponent = () => {
    if (!renderedTechnology_Learned) {
      renderedTechnology_Learned = render(<Technology_Learned {...props} />);
    }
    return renderedTechnology_Learned;
  };

  const mountTestComponent = () => {
    if (!mountedTechnology_Learned) {
      mountedTechnology_Learned = mount(<Technology_Learned {...props} />);
    }
    return mountedTechnology_Learned;
  };  

  beforeEach(() => {
    props = {};
    shallowTechnology_Learned = undefined;
    renderedTechnology_Learned = undefined;
    mountedTechnology_Learned = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
