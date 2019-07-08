import React from 'react'
import Slider from "react-slick";

import firstCover from '../assets/img/cover-1.png';
import secondCover from '../assets/img/cover.png';
import thirdCover from '../assets/img/unreleased_cover.png';
import DaftLogo from '../assets/img/daft_logo.svg';



class CoverSlider extends React.Component{
		
		constructor(props){
			super(props);
			this.slider = React.createRef();
			this.previous = this.previous.bind(this);
			this.next = this.next.bind(this);
		}

		previous(){
			this.slider.slickPrev();
		}
		next(){
			this.slider.slickNext();
		}

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

			<div className="slider">
				<style>
					{daftLogoCSS}
				</style>
				<Slider ref={slider => (this.slider = slider)} {...settings}>
					<div>
						<img className="" src={thirdCover} alt=""/>
					</div>
					<div>	
						<img className="" src={secondCover} alt=""/>
					</div>
					<div>	
						<img className="" src={firstCover} alt=""/>
					</div>
				</Slider>
			</div>
		)
	}



}


export default CoverSlider;
