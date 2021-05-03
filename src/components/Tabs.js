import React from 'react';
import "../styles/Tabs.css";
import dp from '../assets/pic.png';

const Tabs = ({image,tag,link}) => {
	return (
		<>
			<div className="tabs__main">
				<div className="tab__img">
					<img src={image}  alt="tab-img"/>
				</div>
					<a href={link} target="__blank">
				<div className="tab__links">
					{tag}
				</div>
					</a>
			</div>
		</>
	)
}

export default Tabs