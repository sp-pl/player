import React from 'react';
import CoverSld from '../Slider/Slider.jsx';
import nextIco from '../assets/img/next_ico.svg';

class Right extends React.Component{
	
	render(){
		return(
			<button onClick={() =>{console.log(CoverSld.prototype.next())}} ><img src={nextIco} alt="" /></button>
		)
	}


}

export default Right                                                                                        