import React from 'react'

import jQuery from 'jquery'
import Slider from "react-slick";


import firstCover from '../assets/img/cover-1.png';
import secondCover from '../assets/img/cover.png';
import thirdCover from '../assets/img/unreleased_cover.png';

class CoverSlider extends React.Component{



	render(){
		const settings = {
			className: " ",
			centerMode: true,
			infinite: true,
			centerPadding: "127.5px",
			slidesToShow: 1,
			controls: true
		};
		return(
			<div class="slider">
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