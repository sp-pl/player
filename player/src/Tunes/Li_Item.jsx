import React from 'react';



class LiItem extends React.Component{


	render(){
		return(
			<li class="d-flex">
				<h3 class="title">
					<span class="title-span">
						<span class="counter">{this.props.data.id}.</span>
						{this.props.data.name}
					</span>
				</h3>
				<span class="time">{this.props.data.minutes}:{this.props.data.seconds <= 9 ? '0' + this.props.data.seconds.toString() : this.props.data.seconds }</span>
			</li>
		)
	}

}

export default LiItem;