import React from 'react'

import backIco from '../assets/img/back_ico.svg'

class UpperMenu extends React.Component{

	render(){
		return(
			<div className="upperMenu">
				<button className="arrowButton">
					<img src={backIco} />
				</button>
				<div>
					<span>Album</span>

					<span>Unreleased</span>
				</div>
				<button className="arrowButton">
					<img src={backIco} />
				</button>
			</div>
		)
	}

}

export default UpperMenu