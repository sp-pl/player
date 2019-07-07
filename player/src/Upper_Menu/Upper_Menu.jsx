import React from 'react';

import Meta from '../Meta/Meta.jsx'
import PlayButton from '../Main_Controls/PlayButton.jsx'
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
		const sideMenu = document.querySelector('.sideMenu');
		const upperMenuMeta = document.querySelector('.upperMenu .meta');

		this.setState({
			sideMenuActive: !this.state.sideMenuActive
		})

		if(this.state.sideMenuActive !== true){
			upperMenuMeta.style.display="none";
			sideMenu.classList.add('sideMenu-transition');
		}else{
			sideMenu.classList.remove('sideMenu-transition');
			upperMenuMeta.style.display="flex";
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
					<img className="arrow-left" src={backIco} alt="" />
				</button>
				{this.props.isTunes ? 
					<Meta />
					:
					<div className="meta d-flex d-flex-column">
						<span className="album">Album</span>
						<span className="isReleased">Unreleased</span>
					</div> 
				}
				{this.props.isTunes ? 
					<PlayButton 
						playFn={this.props.playFn}
						isPlayActive={this.props.isPlayActive}/>
					:
					<button 
					className="button sideMenu-button"
					onClick={this.showSideMenuClicked}>
					{this.state.sideMenuActive ? <MissingIco /> : <img className="more-icon" src={moreIco} alt=" " />} 
				</button>
				}
			</div>
		)
	}

}

export default UpperMenu