import React from 'react';
import { Link, NavLink } from 'react-router-dom';




const Navbar = () => {
	return (<div className='navbar bg-custom-navbar h-[113px] items-center flex flex-row justify-evenly text-white'>
		<div>
			<p className='text-8xl'>א</p>
		</div>
		<div className='flex justify-between space-x-32 '>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/About">About</NavLink>
			<Link to={"https://github.com/elias1991xNataly?tab=repositories"} target="_blank">
				Lab</Link>
		</div>
	</div>)
}
export default Navbar;
