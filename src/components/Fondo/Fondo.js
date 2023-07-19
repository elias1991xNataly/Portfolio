import React from 'react';
import Personal_Introduction from '../../Parts_Of_The_Components/Personal_Introduction/Personal_Introduction';
import Current_Position from '../../Parts_Of_The_Components/Current_Position/Current_Position';
import Work_experience from '../../Parts_Of_The_Components/Work_experience/Work_experience';
import Technology_Learned from '../../Parts_Of_The_Components/Technology_Learned/Technology_Learned';
import Projects_Examples from '../../Parts_Of_The_Components/Projects_Examples/Projects_Examples';
import Contact_Info from '../../Parts_Of_The_Components/Contact_Info/Contact_Info';

const Fondo = () => {

	return (
		<div className='main bg-custom-home h-[5000px] flex flex-col items-center'>
			<Personal_Introduction />
			<div className='top-[333px]  relative flex flex-col items-center'>
				<Current_Position />
				<Work_experience/>
				<Technology_Learned/>
				<Projects_Examples/>
			</div>
				<Contact_Info/>


		</div>)
}
export default Fondo;
