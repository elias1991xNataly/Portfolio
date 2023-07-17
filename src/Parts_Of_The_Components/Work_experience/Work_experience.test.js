import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Work_experience from './Work_experience';

describe('Work_experience', () => {
  let props;
  let shallowWork_experience;
  let renderedWork_experience;
  let mountedWork_experience;

  const shallowTestComponent = () => {
    if (!shallowWork_experience) {
      shallowWork_experience = shallow(<Work_experience {...props} />);
    }
    return shallowWork_experience;
  };

  const renderTestComponent = () => {
    if (!renderedWork_experience) {
      renderedWork_experience = render(<Work_experience {...props} />);
    }
    return renderedWork_experience;
  };

  const mountTestComponent = () => {
    if (!mountedWork_experience) {
      mountedWork_experience = mount(<Work_experience {...props} />);
    }
    return mountedWork_experience;
  };  

  beforeEach(() => {
    props = {};
    shallowWork_experience = undefined;
    renderedWork_experience = undefined;
    mountedWork_experience = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
