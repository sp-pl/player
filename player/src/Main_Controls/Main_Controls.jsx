import React from 'react'

import shuffleIco from '../assets/img/shuffle_ico.svg'
import previousIco from '../assets/img/previous_ico.svg'
import nextIco from '../assets/img/next_ico.svg'
import repeatIco from '../assets/img/repeat_ico.svg'
import playInactiveIco from '../assets/img/Play_inactive.png'
import playActiveIco from '../assets/img/Play_active.png'

class MainControls extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			isPlayActive: false
		}
	}

	play = () => {
		
		const playImg = document.querySelector('.mainControls .play-button')

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

	componentDidUpdate(){
		
	}

	render(){
		return(
			<div className="mainControls d-flex">
				<button><img src={shuffleIco} alt="" /></button>
				<button><img src={previousIco} alt="" /></button>
				<button>
					<img 
						src={playInactiveIco} 
						alt=""
						className="play-button play-inactive" 
						onClick={this.play}/>
				</button>
				<button><img src={nextIco} alt="" /></button>
				<button><img src={repeatIco} alt="" /></button>
			</div>
		)
	}

}

export default MainControls