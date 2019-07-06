import React from 'react';

import MissingIco from './missingIcoComponent.jsx'

import backIco from '../assets/img/back_ico.svg'
import moreIco from '../assets/img/more_ico.svg'



class UpperMenu extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			sideMenuActive:false
		}
	}

	showSideMenuClicked = () => {
		const upperMenu = document.querySelector('.upperMenu')
		const sideMenuButton = document.querySelector('.upperMenu .button.sideMenu-button');
		const sideMenuButtonImg = document.querySelector('.upperMenu .button.sideMenu-button img');
		const sideMenu = document.querySelector('.sideMenu');

		this.setState({
			sideMenuActive: !this.state.sideMenuActive
		})

		if(this.state.sideMenuActive != true){
			sideMenu.classList.add('sideMenu-transition')
		}else{
			sideMenu.classList.remove('sideMenu-transition')
		}

		//show current cover in sideMenu

		let currentCover = document.querySelector('.slider .slick-current img')
		const currentCoverSideMenu = document.querySelector('.sideMenu .current img')

		currentCoverSideMenu.src = currentCover.src


	};
	render(){
		return(
			<div className="upperMenu d-flex d-flex-justify-between d-flex-align-items-center">
				<button className="button">
					<img className="arrow-left" src={backIco} />
				</button>
				<div className="meta d-flex d-flex-column">
					<span className="album">Album</span>
					<span className="isReleased">Unreleased</span>
				</div>
				<button 
					className="button sideMenu-button"
					onClick={this.showSideMenuClicked}>
					{this.state.sideMenuActive ? <MissingIco /> : <img className="more-icon" src={moreIco} />} 

					
				</button>
				
			</div>
		)
	}

}

export default UpperMenu