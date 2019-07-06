import React from 'react'

import jQuery from 'jquery'
import Slider from "react-slick";


import firstCover from '../assets/img/cover-1.png';
import secondCover from '../assets/img/cover.png';
import thirdCover from '../assets/img/unreleased_cover.png';
import DaftLogo from '../assets/img/daft_logo.svg';



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
		const daftLogoCSS = '.slick-active:after{background-image:' + `url('${DaftLogo}')` + '}; background-size:cover; background-repeat:no-repeat;';

		return(

			<div class="slider">
				<style>
					{daftLogoCSS}
				</style>
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