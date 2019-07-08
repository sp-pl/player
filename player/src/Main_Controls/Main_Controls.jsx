import React from 'react'

import PlayButtonMain from './PlayButtonMain.jsx';
import LeftButton from './Left.jsx';
import RightButton from './Right.jsx';

import shuffleIco from '../assets/img/shuffle_ico.svg'
import repeatIco from '../assets/img/repeat_ico.svg'


class MainControls extends React.Component{
	
	render(){
		return(
			<div className="mainControls d-flex">
				<button><img src={shuffleIco} alt="" /></button>
				<LeftButton />
				<PlayButtonMain 
					playFn={this.props.playFn}
					isPlayActive={this.props.isPlayActive}/>
				<RightButton />
				<button><img src={repeatIco} alt="" /></button>
			</div>
		)
	}
}

export default MainControls