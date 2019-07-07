import React from 'react'

import Meta from '../Meta/Meta.jsx'

class SideMenu extends React.Component{

	showCurrent(){
		const currentImage = document.querySelector('.slider .slick-current .img');

	}

	render(){
		return(
			<div className="sideMenu">
				<div class="current">
					<img src="#" />
				</div>
				<Meta />
				<div className="dots d-flex">
					<div></div>
				</div>
				<div className="more d-flex d-flex-column">
					<button className="option">Add to playlist</button>
					<button className="option">Show album</button>
					<button	className="option">Share with friends</button>
				</div>	
			</div>
		)
	}


}

export default SideMenu;