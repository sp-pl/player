import React from 'react';
import Next from './Next.jsx';
import songsList from './songsList.js'

import LiItem from './Li_Item.jsx'





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

	createListItem(){

	}
	


	render(){

	



		return(

			<div className="tunes">
					<Next />
					
					<ul className="tunesList">
						{songsList.map((data) => {
							return <LiItem data={data} />
						})
						}
					</ul>
					<div className="options d-flex d-flex-column">
						<button className="shuffle">
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
