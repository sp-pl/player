import React from 'react';

import playInactiveIco from '../assets/img/Play_inactive.png'
import playActiveIco from '../assets/img/Play_active.png'

class PlayButton extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			isPlayActive: false
		}
	}


	play = () => {
		
		const playImg = document.querySelector('.mainControls .play-button-img')

		this.setState({
			isPlayActive : !this.state.isPlayActive
		})

		if(this.state.isPlayActive == false){
			playImg.classList.add('play-active')
			playImg.classList.remove('play-inactive')
			playImg.src=playActiveIco
		}else{
			playImg.classList.remove('play-active')
			playImg.classList.add('play-inactive')
			playImg.src=playInactiveIco
		}
		

	}

	render(){
		return(
			<button
					className="play-button">
					<img 
						src={playInactiveIco} 
						alt=""
						className="play-button-img play-inactive" 
						onClick={this.play}/>
			</button>
		)
	}


}

export default PlayButton;