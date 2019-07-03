import React from 'react'
import playlistIco from '../assets/img/playlist_ico.svg'

class Next extends React.Component{


	constructor(props){
		super(props)
		this.state={
			isClicked:false
		}

	}


	nextActionClicked(){


		const tunes = document.querySelector('.tunes')
		const next = document.querySelector('.next')
		next.style.display = 'none'
		tunes.classList.add('tunes-transition')
	}



	render(){
		return(
			<div className="next d-flex">
				<button className="action" onClick={() => {this.nextActionClicked()}}>
				
					<img className="playList-ico" src={playlistIco} />
				</button>
				<div className="data-next">
					<span>next</span>
					<h3>Livin'In A Movie</h3>
					<span>3:27</span>
				</div>
			</div>
		)
	}

}

export default Next