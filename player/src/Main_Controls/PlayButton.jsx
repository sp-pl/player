import React from 'react';

import playInactiveIco from '../assets/img/Play_inactive.png'
import playActiveIco from '../assets/img/Play_active.png'

class PlayButton extends React.Component{

	render(){
		return(
			<button
					className="play-button"
					onClick={this.props.playFn}>
					<img 
						src={this.props.isPlayActive? playActiveIco : playInactiveIco} 
						alt=""
						className={this.props.isPlayActive? "play-button-img play-active" : "play-button-img play-inactive"}
						/>
			</button>
		)
	}


}

export default PlayButton;