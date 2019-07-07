import React from 'react'

import PlayButton from './PlayButton.jsx';

import shuffleIco from '../assets/img/shuffle_ico.svg'
import previousIco from '../assets/img/previous_ico.svg'
import nextIco from '../assets/img/next_ico.svg'
import repeatIco from '../assets/img/repeat_ico.svg'


class MainControls extends React.Component{

	constructor(props){
		super(props)

	}



	componentDidUpdate(){
		
	}

	render(){
		return(
			<div className="mainControls d-flex">
				<button><img src={shuffleIco} alt="" /></button>
				<button><img src={previousIco} alt="" /></button>
				<PlayButton />
				<button><img src={nextIco} alt="" /></button>
				<button><img src={repeatIco} alt="" /></button>
			</div>
		)
	}

}

export default MainControls