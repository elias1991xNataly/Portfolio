import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Personal_Introduction from './Personal_Introduction';

describe('Personal_Introduction', () => {
  let props;
  let shallowPersonal_Introduction;
  let renderedPersonal_Introduction;
  let mountedPersonal_Introduction;

  const shallowTestComponent = () => {
    if (!shallowPersonal_Introduction) {
      shallowPersonal_Introduction = shallow(<Personal_Introduction {...props} />);
    }
    return shallowPersonal_Introduction;
  };

  const renderTestComponent = () => {
    if (!renderedPersonal_Introduction) {
      renderedPersonal_Introduction = render(<Personal_Introduction {...props} />);
    }
    return renderedPersonal_Introduction;
  };

  const mountTestComponent = () => {
    if (!mountedPersonal_Introduction) {
      mountedPersonal_Introduction = mount(<Personal_Introduction {...props} />);
    }
    return mountedPersonal_Introduction;
  };  

  beforeEach(() => {
    props = {};
    shallowPersonal_Introduction = undefined;
    renderedPersonal_Introduction = undefined;
    mountedPersonal_Introduction = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
