import React from 'react';
import Next from './Next.jsx';

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
		
		setTimeout(function(){
			next.style.display = "flex"
		},1000)
	}


	render(){
		return(

			<div className="tunes">
			
				<Next />
				
				<ul className="tunesList">
					<li>
						<span>1.</span>
						<h3>Livi in a Movie</h3>
						<span>3:27</span>
					</li>
				</ul>
				<div className="options">
					<button>
						shuffle play
					</button>
					<button 
						clasName="hide"
						onClick={() => {this.hideTunesList()}}>
						bottom
					</button>
					
				</div>
			</div>

		)
	}
}


export default TunesList
