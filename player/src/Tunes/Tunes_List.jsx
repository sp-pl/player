import React from 'react';
import songsList from './songsList.js'
import LiItem from './Li_Item.jsx'
import PlaylistIco from '../assets/img/playlist_ico.svg'
import HideIco from '../assets/img/hide_ico.svg'



class TunesList extends React.Component{



	


	render(){
		return(
			<div className="tunes">
					<div className="next d-flex">
						<button 
							className="next-action" 
							onClick={this.props.tunesShow}>
							<img className="playList-ico" src={PlaylistIco} />
						</button>
						<span class="next-text">
							next
						</span>
					</div>
					<div class="tunesList-container">
						<ul className="tunesList">
							{songsList.map((data) => {
								return <LiItem data={data} />
							})
							}
						</ul>
					</div>	
					<div className="options d-flex d-flex-column">
						<button className="shuffle">
							shuffle play
						</button>
						<button 
							className="hide"
							onClick={this.props.tunesHide}>
							<img src={HideIco} alt="icon hide" />
						</button>
						
					</div>
			</div>

		)
	}
}


export default TunesList
