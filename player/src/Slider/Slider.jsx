import React from 'react'

import jQuery from 'jquery'
import Slider from "react-slick";


import firstCover from '../assets/img/cover-1.png';
import secondCover from '../assets/img/cover.png';
import thirdCover from '../assets/img/unreleased_cover.png';

class CoverSlider extends React.Component{



	render(){
		const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: 0,
      slidesToShow: 2,
      speed: 500,
      controls: true
    };
		return(
			<div>
			<Slider {...settings}>
			<div>
				<img className="" src={firstCover} />
			</div>
			<div>	
				<img className="" src={secondCover} />
			</div>
			<div>	
				<img className="" src={thirdCover} />
			</div>
			</Slider>
			</div>
		)
	}



}


export default CoverSlider