import React from 'react';


import backIco from '../assets/img/back.svg'
import moreIco from '../assets/img/more_ico.svg'

import SideMenu from '../Side_Menu/Side_Menu.jsx'

class UpperMenu extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			sideMenuActive:false
		}
	}

	showSideMenuClicked = () => {
		const sideMenuButton = document.querySelector('.upperMenu .button.sideMenu-button');
		const sideMenuButtonImg = document.querySelector('.upperMenu .button.sideMenu-button img');
		const sideMenu = document.querySelector('.upperMenu .sideMenu');

		this.setState({
			sideMenuActive: !this.state.sideMenuActive
		})

		if(this.state.sideMenuActive != true){
			sideMenu.classList.add('sideMenu-transition')
		}else{
			sideMenu.classList.remove('sideMenu-transition')
		}
	};
	render(){
		return(
			<div className="upperMenu d-flex d-flex-justify-between d-flex-align-items-center">
				<button className="button">
					<img className="arrow-left" src={backIco} />
				</button>
				<div>
					<span>Album</span>

					<span>Unreleased</span>
				</div>
				<button 
					className="button sideMenu-button"
					onClick={this.showSideMenuClicked}>
					<img className="more-icon" src={this.state.sideMenuActive ? moreIco : 'dupa'} />
				</button>
				<SideMenu />
			</div>
		)
	}

}

export default UpperMenu