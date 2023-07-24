import React from 'react';
import { Link } from 'react-router-dom';

const Technology_Learned = () => {
	return (
		<div className='text-white top-96 relative flex flex-col justify-center'>
			<div>
				<p className='text-white text-2xl  text-center'>I´m currently looking to join a <b className='text-custom-purple'> profesional </b>  team</p>
				<p className='text-sm  text-white italic relative flex justify-center'> that values improving members of the team´s skills through work. </p>
			</div>
			<div className='relative top-4 grid grid-cols-7 justify-between space-y-6'>
				<img src="./images/Figma.png" alt="" className='w-[32px] h-[29px] relative top-6' />
				<img src="./images/React.png" alt="" className='w-[32px] h-[29px]' />
				<img src="./images/Rectangle_6.png" alt="" className='w-[32px] h-[29px]' />
				<img src="./images/CSS3.png" alt="hu" className='w-[32px] h-[29px]' />
				<img src="./images/Agile.png" alt="" className='w-[32px] h-[29px]' />
				<img src="./images/bootstrap.jpg" alt="" className='w-[32px] h-[29px]' />
				<img src="./images/firebase_logo_shot.png" alt="" className='w-[40px] h-[40px]' />
				<img src="./images/HTML.png" alt="" className='w-[32px] h-[29px] relative left-[120px]' />
				<img src="./images/Vector_28.png" alt="" className='relative top-6 left-[10px]' />
				<img src="./images/tailwind.png" alt="" className='w-[32px] h-[29px] relative left-[120px] ' />
				<img src="./images/Vector_28.png" alt="" className='relative left-[10px] top-6' />
				<img src="./images/Trello.png" alt="" className='w-[32px] h-[29px] relative left-[120px]' />
				<img src="./images/Vector_26.png" alt="" className='relative right-[60px] top-6' />
			</div>

			<div className='grad-rad1'>
				<div className='Introduction_gradient flex justify-center  relative lg:left-48 2xl:left-70 left-24 bottom-4'>
					<div className='Container w-[180px] h-[180px] flex flex-shrink-0'>
						<p className='text-[500px] relative bottom-[180px] '>א</p>
						<div className='w-[295px] h-[164px] flex flex-shrink-0 border-solid border-custom-orbits border-2 rounded-[50%] relative top-48 right-[280px] '></div>
						<div className='w-[306px] h-[275px] flex items-center flex-shrink-0 border-solid border-custom-orbits border-2 rounded-[50%] relative right-[580px] top-32'></div>
						<div className="h-[50px] w-[100px] border-solid  from-custom-orbits to-custom-white flex flex-shrink-0 rounded-[50%]"></div>
						<div className='w-[694px] h-[275px] flex items-center flex-shrink-0 border-solid border-custom-orbits border-2 rounded-[50%] relative right-[1180px] top-32'>


							<img src="./images/Agile.png" alt="" className='w-[32px] h-[29px] relative bottom-24 hover:animate-spin' />
						</div>
						<div className='w-[764px] h-[275px] flex items-center flex-shrink-0 border-solid border-custom-orbits border-2 rounded-[50%] relative -left-[1920px] top-32'>
							<Link to={"https://getbootstrap.com/"} target='_blank'>
								<img src="./images/bootstrap.jpg" alt="" className='w-[32px] h-[29px] relative top-20 hover:animate-spin' />
							</Link>
							<Link to={"https://firebase.google.com/?hl=es-419"} target="_blank">
								<img
									src="./images/firebase_logo_shot.png" alt=""
									className='w-[40px] h-[40px] relative left-[670px] bottom-20 hover:animate-spin' />
							</Link>
							<Link to={"https://trello.com/u/eliasalfonsosoto/boards"} target="_blank">
								<img
									src="./images/Trello.png" alt=""
									className='w-[32px] h-[29px] relative bottom-20 right-24 hover:animate-spin' />
							</Link>
						</div>
						<div className='w-[881px] h-[275px] flex items-center flex-shrink-0 border-solid border-custom-orbits border-2 rounded-[50%] relative -left-[2745px] top-32 '>


							<Link to={"https://www.tailwindcss.com/"} target='_blank'>
								<img
									src="./images/tailwind.png"
									alt="" className='w-[32px] h-[29px] relative left-[827px] top-14 hover:animate-spin' />
							</Link>
							<Link to={"https://developer.mozilla.org/en-US/docs/Web/CSS"} target="_blank">
								<img
									src="./images/CSS3.png"
									className='w-[32px] h-[29px] relative left-[827px] hover:animate-spin' alt="" />
							</Link>
							<Link to={"https://www.w3schools.com/html/"} target="_blank">
								<img
									src="./images/HTML.png"
									className='w-[32px] h-[29px] relative left-[780px]  bottom-9 hover:animate-spin' alt=""
								/>
							</Link>
							<Link to={"https://www.figma.com/?fuid="} target="_blank">
								<img
									src="./images/Figma.png"
									className='w-[32px] h-[29px] relative right-[110px] hover:animate-spin' alt="" />
							</Link>
							<Link to={"https://es.react.dev/"} target="_blank">
								<img
									src="./images/React.png" className='w-[32px] h-[29px] relative right-[100px] top-14 hover:animate-spin' alt=""
								/>
							</Link>
							<Link to={"https://javascript.info/"} target="_blank">
								<img
									src="./images/Rectangle_6.png"
									className='w-[32px] h-[29px] relative left-[630px] top-20 hover:animate-spin' alt="" />
							</Link>
						</div>




					</div>
				</div>
			</div>
		</div>
	)
}
export default Technology_Learned;
