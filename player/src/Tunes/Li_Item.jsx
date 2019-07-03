import React from 'react';



class LiItem extends React.Component{

	constructor(props){
		super(props)
	}

	render(){
		return(
			<li>
				<span>{this.props.data.id}</span>
				<h3>
					<span>
						{this.props.data.name}
					</span>
				</h3>
				<span>{this.props.data.minutes}:{this.props.data.seconds <= 9 ? '0' + this.props.data.seconds.toString() : this.props.data.seconds }</span>
			</li>
		)
	}

}

export default LiItem;