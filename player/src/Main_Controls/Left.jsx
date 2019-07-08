import React from 'react';
import CoverSld from '../Slider/Slider.jsx';
import previousIco from '../assets/img/previous_ico.svg';

class Left extends React.Component{
	
	render(){
		return(
			<button onClick={() =>{console.log(CoverSld.prototype.previous())}}><img src={previousIco} alt="" /></button>
		)
	}

}

export default Left