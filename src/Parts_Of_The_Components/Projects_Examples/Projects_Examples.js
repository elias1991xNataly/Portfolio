import React from 'react';

const Projects_Examples = () => {

	return (<div className='Introduction_gradient relative top-[1200px] flex flex-row-reverse gap-x-2 relative  '>
		<div className='Introduction_gradient relative right-24 '>
			<div className='w-[400px] bg-custom-eggplant relative overflow-clip overflow-auto top-20 left-10'>

				<img src='./images/Project_1.png' alt="E-commerce shop" className='relative  h-[280px] relative left-10 top-5   ' />
			</div>

		</div>
		<div className='Description flex flex-col z-50 gap-y-4'>
			<h3 className='text-custom-purple w-[200px] flex justify-start relative right-24'>High Altitude Coffee</h3>
			<h1 className=' relative right-32'> Ecommerce shop</h1>

			<p className='w-[400px]'> A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.</p>
		</div>
	</div>
	)
}

export default Projects_Examples;
