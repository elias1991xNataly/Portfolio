import React from 'react';




const Navbar = () => {
	return (<div className='navbar bg-custom-navbar h-[113px] items-center flex flex-row justify-evenly text-white'>
		<div>
			<p className='text-8xl'>א</p>
		</div>
		<div className='flex justify-between space-x-32 '>
			<p>Home</p>
			<p>About</p>
			<p>Lab</p>
		</div>
	</div>)
}
export default Navbar;
