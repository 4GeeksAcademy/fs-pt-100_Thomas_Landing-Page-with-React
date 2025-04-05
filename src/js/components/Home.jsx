import React from "react";

import Navbar from './Navbar';
import Hero from './Hero';
import Card from './Card';
import Footer from './Footer';

//create your first component
const Home = () => {
	return (
		<div className="d-flex flex-column min-vh-100">
			<Navbar/>
			<div className="container flex-grow-1">
				<Hero />
				<div className="row justify-content-center justify-content-md-between">
					<Card className="col-12 col-md-4 col-lg-3" />
					<Card className="col-12 col-md-4 col-lg-3" />
					<Card className="col-12 col-md-4 col-lg-3" />
					<Card className="col-12 col-md-4 col-lg-3" />
				</div>
			</div>
			<Footer className="mt-auto"/>
		</div>
	);
};

export default Home;