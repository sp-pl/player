import React from 'react'

import shuffleIco from '../assets/img/shuffle_ico.svg'
import previousIco from '../assets/img/previous_ico.svg'
import nextIco from '../assets/img/next_ico.svg'
import repeatIco from '../assets/img/repeat_ico.svg'
import playInactiveIco from '../assets/img/Play_inactive.png'
import playActiveIco from '../assets/img/Play_active.png'

class MainControls extends React.Component{


	render(){
		return(
			<div className="mainControls">
				<button><img src={shuffleIco} alt="" /></button>
				<button><img src={previousIco} alt="" /></button>
				<button><img src={playActiveIco} alt="" /></button>
				<button><img src={nextIco} alt="" /></button>
				<button><img src={repeatIco} alt="" /></button>
			</div>
		)
	}

}

export default MainControls