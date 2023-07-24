import React from 'react';
import { NavLink } from 'react-router-dom';




const Navbar = () => {
	return (<div className='navbar w-auto bg-custom-navbar xl:w-max l:w-[full] m:w-[screen] h-[113px] items-center flex flex-row justify-evenly text-white'>
		<div>
			<p className='text-8xl'>א</p>
		</div>
		<div className='flex justify-between space-x-32 '>
			<NavLink to="/">Home</NavLink>
			<a href="#About" >About</a>
			<a href="#Lab">Lab</a>
		</div>
	</div>)
}
export default Navbar;
