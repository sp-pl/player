import React from 'react'

import Jquery from 'jquery';
import firstCover from '../assets/img/cover-1.png';
import secondCover from '../assets/img/cover.png';
import thirdCover from '../assets/img/unreleased_cover.png';

class Slider extends React.Component{



	render(){
		return(
			<div className="slider">
				<img className="" src={firstCover} />
				<img className="" src={secondCover} />
				<img className="" src={thirdCover} />
			</div>
		)
	}



}


export default Slider