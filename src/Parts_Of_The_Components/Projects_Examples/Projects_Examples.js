import React from 'react';

const Projects_Examples = () => {

	return (
	<div className='Introduction_gradient relative top-[600px] flex flex-row-reverse gap-x-2 relative  '>
		<div className='Introduction_gradient relative right-24 '>
			<div className='w-[400px] bg-custom-eggplant relative overflow-clip overflow-auto top-20 left-10'>

				<img src='./images/Project_1.png' alt="E-commerce shop" className='relative  h-[280px] relative left-10 top-5   ' />
			</div>

		</div>
		<div className='Description pb-5 flex flex-col z-50 gap-y-4 w-[669px] h-[165px] relative top-[130px] left-10'>
			<h3 className='text-custom-purple w-[200px] flex justify-start relative right-24'>High Altitude Coffee</h3>
			<h1 className=' relative right-32'> Ecommerce shop</h1>

			<p className='w-[400px]'> A web app for buying coffee specialized in different and exotic flavors. Building a cart api using react app through useContext and styling using a mix of tailwind and normal css. </p>
		</div>
	</div>
	)
}

export default Projects_Examples;
