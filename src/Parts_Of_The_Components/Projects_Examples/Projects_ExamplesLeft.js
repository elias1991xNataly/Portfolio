import React from 'react';

const ProjectsExamples = (props) => {

	return (
		<div id="Lab" className='Introduction_gradient relative top-[600px] flex justify-center flex-row-reverse gap-x-2 relative  '>
			<div className='Introduction_gradient relative right-24 '>
				<div className='w-[400px] bg-custom-eggplant relative overflow-clip overflow-auto top-20 left-10'>

					<img src={props.image} alt="E-commerce shop" className='relative  h-[280px] relative left-10 top-5   ' />
				</div>

			</div>
			<div className='Projects flex flex-col'>

				<div className='text-end space-y-2 relative top-8 right-20'>

					<h3 className='text-custom-purple w-[200px] flex justify-start relative left-[260px]'>{props.header1}</h3>
					<h1 className='relative text-5xl flex justify-start left-64'> {props.header2}</h1>
				</div>
				<div className='Description pb-5 flex flex-col z-50 gap-y-4 w-[669px] h-[165px] relative top-[60px] left-10'>
					<p className='w-[400px]'> {props.text} </p>
				</div>
			</div>

		</div>
	)
}

export default ProjectsExamples;
