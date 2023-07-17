import React from 'react';
import PropTypes from 'prop-types';
import styles from './Projects_Examples.scss';

const Projects_Examples = props => (
	<div>This is a component called Projects_Examples.</div>
);

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class Projects_Examples extends React.Component {
//   render() {
//     return <div>This is a component called Projects_Examples.</div>;
//   }
// }

const Projects_ExamplesPropTypes = {
	// always use prop types!
};

Projects_Examples.propTypes = Projects_ExamplesPropTypes;

export default Projects_Examples;
