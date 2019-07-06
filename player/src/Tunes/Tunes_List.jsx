import React from 'react';
import Next from './Next.jsx';
import songsList from './songsList.js'
import LiItem from './Li_Item.jsx'
import HideIco from '../assets/img/hide_ico.svg'



class TunesList extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			isActionClicked : false
		}
	}
	

	hideTunesList(){
		const tunes = document.querySelector('.tunes')
		const next = document.querySelector('.next')

		tunes.classList.remove('tunes-transition')
		tunes.classList.add('tunes-transition-before-end')
		setTimeout(function(){
			tunes.classList.remove('tunes-transition-before-end')
			next.style.display = "flex"
		},1000)

	}

	


	render(){

	



		return(

			<div className="tunes">
					<div class="next-container">
						<Next />
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
							onClick={() => {this.hideTunesList()}}>
							<img src={HideIco} alt="icon hide" />
						</button>
						
					</div>
			</div>

		)
	}
}


export default TunesList
