import React from 'react';

const WorkExperience = () => {
	return (
		<div className='text-white top-48 relative'>
			<div className='Introduction_gradient space-y-6'>
				<h1 className='text-white flex flex-nowrap justify-start relative right-96'>Work Experience</h1>
				<section className='grid grid-cols-2 gap-x-[600px] gap-y-3 right-[24rem] relative'>
					<div className='box flex flex-row h-48 p-10 w-[570px] rounded-2xl shadow'>
						<div>
								<img src="./images/Rectangle.png" alt="" className='w-[100px] h-[100px] absolute z-50' ></img>
						<div className='w-[100px] h-[50px] flex items-center flex-shrink-0 bg-custom-violet rounded-[50%] relative top-12'></div>
						</div>
						<div className='pl-5 flex flex-col justify-center space-y-2'>

							<h2 className='text-[26px]'>Contigo Plataforma Integral de Servicios</h2>
							<p className='text-[8px]'>Consultancy that gave accounting services to companies inside the group that were big enough for being auditored.</p>
							
							<button className='w-[140px] h-[33px] bg-[#2C1250] border border-2px border-[#693B93] rounded-xl px-3 py-2 flex items-center justify-center'>Learn More</button>
						</div>
					</div>
					<div className='box flex flex-row h-48 p-10 w-[570px] rounded-2xl shadow'>
						<div >
							<div>
								<img src="./images/lightbulb.png" alt="" className='w-[100px] h-[100px] absolute z-50' />
								<div className='w-[111px] h-[42px] top-12 flex items-center flex-shrink-0 bg-custom-violet relative bottom-3 rounded-[50%]'></div>
							</div>

						</div>
						<div className='pl-5 flex flex-col justify-center space-y-2'>
							<h2 className='text-[26px]'>English Connection Honrado</h2>
							<p className='text-[8px]'>English academy in Spain that needed an accountant to substitute his accountant that just turned a father.</p>
							<button className='w-[140px] h-[33px] bg-[#2C1250] border border-2px border-[#693B93] rounded-xl px-3 py-2 flex items-center justify-center'>Learn More</button>
						</div>
					</div>
					<div className='box flex flex-row h-48 p-10 w-[570px] rounded-2xl '>
						<div>
							<div>
								<img src="./images/cup.png" alt="" className='w-[100px] h-[100px] absolute z-50' />
								<div className='w-[100px] h-[50px] relative top-12 flex items-center flex-shrink-0 bg-custom-violet  rounded-[50%]'></div>
							</div>
						</div>
						<div className='pl-5 flex flex-col justify-center space-y-2'>

							<h2 className='text-[26px]'>Globally Consulting</h2>
							<p className='text-[8px]'>Consultancy from Portugal that had a subsidiary in Spain. </p>
							<button className='w-[140px] h-[33px] bg-[#2C1250] border border-2px border-[#693B93] rounded-xl px-3 py-2 flex items-center justify-center'>Learn More</button>
						</div>
					</div>
					<div className='box flex flex-row h-48 p-10 w-[570px] rounded-2xl'>
						<div>
							<div>
								<img src="./images/sample.png" alt="" className='w-[100px] h-[100px] absolute z-50' />
								<div className='w-[100px] h-[50px] relative top-12 flex items-center flex-shrink-0 bg-custom-violet rounded-[50%]'></div>
							</div>
						</div>
						<div className='pl-5 flex flex-col justify-center space-y-2'>

							<h2 className='text-[26px]' >Hillcrest Event Center</h2>
							<p className='text-[8px]'>Golfcourse where i began my internship as an Accountant.</p>

							<button className='w-[140px] h-[33px] bg-[#2C1250] border border-2px border-[#693B93] rounded-xl px-3 py-2 flex items-center justify-center'>Learn More</button>
						</div>
					</div>
				</section>

			</div>
		</div>
	)
}
export default WorkExperience;
