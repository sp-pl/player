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
				<div className="dots">

				</div>
				<div className="more d-flex d-flex-column">
					<button>Add to playlist</button>
					<button>Show album</button>
					<button>Share with friends</button>
				</div>	
			</div>
		)
	}


}

export default SideMenu;