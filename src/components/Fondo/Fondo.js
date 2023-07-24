import React from 'react';
import Personal_Introduction from '../../Parts_Of_The_Components/Personal_Introduction/Personal_Introduction';
import Current_Position from '../../Parts_Of_The_Components/Current_Position/Current_Position';
import Work_experience from '../../Parts_Of_The_Components/Work_experience/Work_experience';
import Technology_Learned from '../../Parts_Of_The_Components/Technology_Learned/Technology_Learned';
import Projects_Examples from '../../Parts_Of_The_Components/Projects_Examples/Projects_ExamplesLeft';
import Contact_Info from '../../Parts_Of_The_Components/Contact_Info/Contact_Info';
import ProjectExampleRight from '../../Parts_Of_The_Components/ProjectExampleRight/ProjectExampleRight';

const Fondo = () => {

	return (
		<div className='main bg-custom-home h-[6300px] sm:w-[screen]  xl:w-screen flex flex-col items-center'>
			<Personal_Introduction />
			<div className='top-[333px]  relative flex flex-col items-center'>
				<Current_Position />
				<Work_experience/>
				<Technology_Learned/>
				<div className='flex justify-center flex-col flex-wrap'>
				<Projects_Examples image="./images/Project_1.png" header1="High Altitude Coffee" header2="Ecommerce shop" text="A web app for buying coffee specialized in different and exotic flavors. Building a cart api using react app through useContext and stylin using a mix of tailwind and normal css." />
				<ProjectExampleRight image="./images/Actors.png" header1="Actors Nominations and Popularity" header2="Functionality App" text="A web app for checking out which actors has gained Oscars or Emmy´s and the popularity of each Actor."/>
				<Projects_Examples image="./images/Countries.png" header1="Countries" header2="Country Links" text="A web app for showing information of countries such as Area, Flag, Capital and the bordering countries. And when clicked on the bordering countries it shows that country information."/>
				</div>
			</div>
				<Contact_Info/>


		</div>)
}
export default Fondo;
