import React from 'react';
import "../styles/Home.css";
import dp from '../assets/pic.png';
import {Row,Col} from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Home = () =>{
	return (
		<>
			<div className="home__main">
					<span className="my__info">
						<span className="my__dp">
							<img src={dp} alt="my_image"/>
						</span>
						<p>Sameer Saini</p>
					</span>
			</div>
		</>
	)
}

export default Home;