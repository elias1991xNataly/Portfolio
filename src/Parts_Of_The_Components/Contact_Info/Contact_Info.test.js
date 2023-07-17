import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Contact_Info from './Contact_Info';

describe('Contact_Info', () => {
  let props;
  let shallowContact_Info;
  let renderedContact_Info;
  let mountedContact_Info;

  const shallowTestComponent = () => {
    if (!shallowContact_Info) {
      shallowContact_Info = shallow(<Contact_Info {...props} />);
    }
    return shallowContact_Info;
  };

  const renderTestComponent = () => {
    if (!renderedContact_Info) {
      renderedContact_Info = render(<Contact_Info {...props} />);
    }
    return renderedContact_Info;
  };

  const mountTestComponent = () => {
    if (!mountedContact_Info) {
      mountedContact_Info = mount(<Contact_Info {...props} />);
    }
    return mountedContact_Info;
  };  

  beforeEach(() => {
    props = {};
    shallowContact_Info = undefined;
    renderedContact_Info = undefined;
    mountedContact_Info = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
