

const PersonalIntroduction = () => {


	return (
		<div className="pt-40 pl-40 relative">


			<div className="relative  pl-[300px] ">Hello! I Am <b className="text-custom-purple">Elias Alfonso</b></div>
			<img src="./images/Diagonal_Arrow.png" alt="" className="relative -pt-20 pl-[215px] bottom-3 " />
			<div className="flex space-x-40">
				<div className="white-gradient rounded-[150px]">
				<div className="Introduction_gradient w-[300px] relative">
					<div className="w-[259px] h-[259px]">

						<img src="./images/Elias2.png" alt="Elias_Avatar" className=" rounded-2xl top-14 left-14 relative" />
					</div>
				</div>
				</div>
				<div className="space-y-3">
					<p>A Front-End Developer who</p>
					<h2 className="text-4xl w-[300px]">Loves solving problems with <b className="text-custom-purple border-2 rounded-[50%] origin-top-left"> programming</b>...</h2>
					<p className="text-xs">Because if you love what you do, you will get really good at it</p> 
				</div>
			</div>
			<div className="top-[300px]"></div>
		</div>
	)
}

export default PersonalIntroduction;
