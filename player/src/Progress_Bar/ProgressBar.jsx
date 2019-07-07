import React from 'react';



class ProgressBar extends React.Component{


	render(){
		return(
			<div className="timer d-flex">
				<div className="time-container">
					<span className="time-from">0:00</span>
				</div>
				<div className="progressBar-container">
					<div className="progressBar-main" ></div>
				</div>
				<div className="time-container">
					<span className="time-to">4:21</span>
				</div>
			</div>
		)
	}


}

export default ProgressBar;