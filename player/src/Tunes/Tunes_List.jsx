import React from 'react';
import Next from './Next.jsx';

class TunesList extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			isShow: false
		}
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
					<
				</div>
			</div>

		)
	}
}

