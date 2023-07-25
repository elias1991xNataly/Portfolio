import React from 'react';
import PersonalIntroduction from '../../Parts_Of_The_Components/Personal_Introduction/Personal_Introduction';
import CurrentPosition from '../../Parts_Of_The_Components/Current_Position/Current_Position';
import WorkExperience from '../../Parts_Of_The_Components/Work_experience/Work_experience';
import TechnologyLearned from '../../Parts_Of_The_Components/Technology_Learned/Technology_Learned';
import ProjectsExamples from '../../Parts_Of_The_Components/Projects_Examples/Projects_ExamplesLeft';
import ContactInfo from '../../Parts_Of_The_Components/Contact_Info/Contact_Info';
import ProjectExampleRight from '../../Parts_Of_The_Components/ProjectExampleRight/ProjectExampleRight';

const Fondo = () => {

	return (
		<div className='main bg-custom-home h-[4800px]  flex flex-col items-center'>
			<PersonalIntroduction />
			<div className='top-[333px]  relative flex flex-col items-center'>
				<CurrentPosition />
				<WorkExperience/>
				<TechnologyLearned/>
				<div  className='flex justify-center flex-col flex-wrap'>
				<ProjectsExamples image="./images/Project_1.png"  website="" header1="High Altitude Coffee" header2="Ecommerce shop" text="A web app for buying coffee specialized in different and exotic flavors. Building a cart api using react app through useContext and styling using a mix of tailwind and normal css." />
				<ProjectExampleRight image="./images/Actors.png"  website="https://contactseas.netlify.app/" header1="Actors Nominations" header2="Sorting" text="A web app for checking out which actors has gained Oscars or Emmy´s and the popularity of each Actor."/>
				<ProjectsExamples image="./images/Countries.png" website="https://wiki-countrieseas.netlify.app/" header1="Countries" header2="Country Links" text="A web app for showing information of countries such as Area, Flag, Capital and the bordering countries. And when clicked on the bordering countries it shows that country information."/>
				</div>
			</div>
				<ContactInfo/>


		</div>)
}
export default Fondo;
