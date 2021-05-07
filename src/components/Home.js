import React from 'react';
import "../styles/Home.css";
import dp from '../assets/pic.png';
import bmc from '../assets/bmc.png';
import twitch from '../assets/twitch.webp';
import github from '../assets/github.png';
import youtube from '../assets/youtube.png';
import linkedin from '../assets/linkedin.png';
import twitter from '../assets/twitter.png';
import medium from '../assets/Medium.png';
import Tabs from './Tabs';
import resume from '../assets/resume.pdf';

//import {Row,Col} from 'react-bootstrap';
//import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Home = () =>{
	const linksArray = [
		{
			img:twitch,
			link:"https://twitch.tv/kazetech",
			tag:"Twitch"
		},
		{
			img:twitter,
			link:"https://twitter.com/soyokaz3",
			tag:"Twitter"
		},
		{
			img:linkedin,
			link:"https://www.linkedin.com/in/sameer-aka-soyokaze/",
			tag:"LinkedIn"
		},
		{
			img:youtube,
			link:"https://youtube.com/c/smgenz",
			tag:"Youtube"
		},
		{
			img:github,
			link:"https://github.com/soyo-kaze",
			tag:"GitHub"
		},
		{
			img:medium,
			link:"https://medium.com/@soyokaze",
			tag:"Medium"
		}
		
	]
	return (
		<>
			<div className="home__main">
					<span className="my__info">
						<span className="my__dp">
							<img src={dp} alt="my_image"/>
						</span>
						<p>Sameer Saini</p>
						<a href={resume} target="__blank"><button className="resume__link">Resume</button></a>
					</span>
					<span className="my__info tabs">
						{linksArray.map(({img,link,tag}) => <Tabs image={img} link={link} tag={tag}/>)}
					</span>
			</div>
		</>
	)
}

export default Home;