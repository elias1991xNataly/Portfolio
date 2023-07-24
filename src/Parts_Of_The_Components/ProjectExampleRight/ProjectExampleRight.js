import React from 'react';

const ProjectExampleRight = (props)=>{
	return(	<div className='Introduction_gradient relative top-[600px] flex  gap-x-2 relative  '>
	<div className='Introduction_gradient relative right-24 '>
		<div className='w-[400px] bg-custom-eggplant relative overflow-clip overflow-auto top-20 left-10'>

			<img src={props.image} alt="E-commerce shop" className='relative  h-[280px] relative left-10 top-5   ' />
		</div>

	</div>
	<div className='Description pb-5 flex flex-col z-50 gap-y-4 w-[669px] h-[165px] relative top-[130px] right-20 px-10 pb-10'>
		<h3 className='text-custom-purple w-[200px] flex justify-end relative '>{props.header1}</h3>
		<h1 className=' relative'> {props.header2}</h1>

		<p className='w-[400px]'> {props.text} </p>
	</div>

</div>)
}

export default ProjectExampleRight;
