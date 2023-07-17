import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Projects_Examples from './Projects_Examples';

describe('Projects_Examples', () => {
  let props;
  let shallowProjects_Examples;
  let renderedProjects_Examples;
  let mountedProjects_Examples;

  const shallowTestComponent = () => {
    if (!shallowProjects_Examples) {
      shallowProjects_Examples = shallow(<Projects_Examples {...props} />);
    }
    return shallowProjects_Examples;
  };

  const renderTestComponent = () => {
    if (!renderedProjects_Examples) {
      renderedProjects_Examples = render(<Projects_Examples {...props} />);
    }
    return renderedProjects_Examples;
  };

  const mountTestComponent = () => {
    if (!mountedProjects_Examples) {
      mountedProjects_Examples = mount(<Projects_Examples {...props} />);
    }
    return mountedProjects_Examples;
  };  

  beforeEach(() => {
    props = {};
    shallowProjects_Examples = undefined;
    renderedProjects_Examples = undefined;
    mountedProjects_Examples = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
