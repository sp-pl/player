import React from 'react'
import Slider from "react-slick";

import BgImage from '../Bg_Image/BgImage.jsx'
import UpperMenu from '../Upper_Menu/Upper_Menu.jsx'
import CoverSlider from '../Slider/Slider.jsx'
import Meta from '../Meta/Meta.jsx'
import MainControls from '../Main_Controls/Main_Controls.jsx'
import ProgressBar from '../Progress_Bar/ProgressBar.jsx'
import TunesList from '../Tunes/Tunes_List.jsx'
import SideMenu from '../Side_Menu/Side_Menu.jsx'


import playInactiveIco from '../assets/img/Play_inactive.png'
import playActiveIco from '../assets/img/Play_active.png'

class Main extends React.Component{


	constructor(props){
		super(props)
		this.state={
			isTunesListActive: false,
			isPlayActive: false,
			isPlayPaused: false,
			pausedWidth: 0,
			playerIntervalId: null,
			progressCounter: 0,
			currentProgressWidth:0,
			currentTuneTime:0
		}
		this.hideTunesList = this.hideTunesList.bind(this)
		this.showTunesList = this.showTunesList.bind(this)
	}

	showTunesList(){
		const tunes = document.querySelector('.tunes');
		const next = document.querySelector('.next');
		
		this.setState({
			isTunesListActive: true
		})

		next.style.display = 'none'
		tunes.classList.add('tunes-transition');
	}


	hideTunesList(){
		const tunes = document.querySelector('.tunes');
		const next = document.querySelector('.next');

		this.setState({
			isTunesListActive: false
		})

		tunes.classList.remove('tunes-transition');
		tunes.classList.add('tunes-transition-before-end');
		setTimeout(function(){
			next.style.display="block";
		},1000)
	}

	play = () => {

		this.setState(prevState => ({
			isPlayActive : !prevState.isPlayActive
		}),() => this.startProgressBar(this.state.isPlayActive))

	}

	startProgressBar(st){
		
		const progressBarMain = document.querySelector('.timer .progressBar-main');
		let innerProgressCounter = 0;
		let tuneDuration = 261000;
		let progressBool = st;
		let drawProgressBar = () => {

			if(innerProgressCounter >= tuneDuration){
				clearInterval(this.state.playerIntervalId)
			}
			this.setState({
				progressCounter: innerProgressCounter,
				currentProgressWidth: progressBarMain.offsetWidth / 380 * 100
			})
			
			if(this.state.isPlayPaused){
				progressBarMain.style.width = this.state.pausedWidth + 261/380 + '%';
				this.setState({
					pausedWidth: this.state.currentProgressWidth
				})
			}else{
				innerProgressCounter = innerProgressCounter + 1000;
				progressBarMain.style.width = (innerProgressCounter / 2610) + '%';
			}
			//convert miliseconds to minutes
			let minutes = Math.floor(innerProgressCounter / 60000);
		 	let seconds = ((innerProgressCounter % 60000) / 1000).toFixed(0);
		  	this.setState({
		  		currentTuneTime:(minutes + ":" + (seconds < 10 ? '0' : '') + seconds)
		  	})
		}





		if(this.state.currentProgressWidth > 0 && this.state.currentProgressWidth < 100){
			this.setState({
				isPlayPaused:true,
				pausedWidth: this.state.currentProgressWidth
			})
		}

		if(progressBool){
			this.setState({
				playerIntervalId: setInterval(drawProgressBar,1000)
			})
		}else{
			clearInterval(this.state.playerIntervalId);
		}
		
	}
	

	render(){ 
		return(
			<div className="main"
			onClick={this.currentCover}>
				<BgImage />
				<UpperMenu 
					isTunes={this.state.isTunesListActive}
					playFn={this.play}
					isPlayActive={this.state.isPlayActive} />
				<CoverSlider />
				<Meta />
				<MainControls
					playFn={this.play}
					isPlayActive={this.state.isPlayActive} />
				<ProgressBar
				tuneProgress={this.state.currentTuneTime} />
				<TunesList
					tunesShow={this.showTunesList} 
					tunesHide={this.hideTunesList}
					/>
				<SideMenu />
			</div>
		)
	}
}

export default Main;