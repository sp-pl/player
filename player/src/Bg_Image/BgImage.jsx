import React from 'react';
import bgImage from '../assets/img/bg_image.jpg'

class BgImage extends React.Component{


	
	render(){
		return(
			<div className="bg-image" style={{backgroundImage: `url(${bgImage})`}}>
				<div className="layer"></div>
			</div>
		)
	}

}

export default BgImage