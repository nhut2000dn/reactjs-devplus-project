import React from 'react';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import About from '../../components/About';
import Testimonial from '../../components/Testimonial';
import Preloader from '../../components/Preloader';
import ScrollUp from '../../components/ScrollUp';
import Skill from '../../components/Skill';
import Campus from '../../components/Campus';
import Admission from '../../components/Admission';

const HomePage = () => {
	return (
		<div>
			<Preloader />
			<Header />
			<Banner />
			<About />
			<Skill />
			<Campus />
			<Admission />
			<Testimonial />
			<ScrollUp />
		</div>
	);
};

export default HomePage;
