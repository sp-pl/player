import React from 'react';

import playInactiveIco from '../assets/img/Play_inactive.png'
import playActiveIco from '../assets/img/Play_active.png'

class PlayButtonMain extends React.Component{

	constructor(props){
		super(props)
	}




	render(){
		return(
			<button
					className="play-button"
					onClick={this.props.playFn}>
					<img 
						src={this.props.isPlayActive? playActiveIco : playInactiveIco}
						alt=""
						className="play-button-img play-inactive" 
						/>
			</button>
		)
	}


}

export default PlayButtonMain;