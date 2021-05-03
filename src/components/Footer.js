import React from "react";
import heart from '../assets/heart.png'
import '../styles/Footer.css'

const Footer = () =>{
	return (
		<>
			<footer className="footer__main">
				<p>Made with</p> <img src={heart} alt="heart" className="heart"/> <p>by Soyokaze</p>
			</footer>
		</>
	)
}

export default Footer