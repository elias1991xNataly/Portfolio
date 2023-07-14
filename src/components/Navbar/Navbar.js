import React from 'react';
import PropTypes from 'prop-types';
import styles from './Navbar.scss';

const Navbar = props => (
	<div>This is a component called Navbar.</div>
);

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class Navbar extends React.Component {
//   render() {
//     return <div>This is a component called Navbar.</div>;
//   }
// }

const NavbarPropTypes = {
	// always use prop types!
};

Navbar.propTypes = NavbarPropTypes;

export default Navbar;
