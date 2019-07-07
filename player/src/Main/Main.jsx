import React from 'react'
import BgImage from '../Bg_Image/BgImage.jsx'
import UpperMenu from '../Upper_Menu/Upper_Menu.jsx'
import CoverSlider from '../Slider/Slider.jsx'
import Meta from '../Meta/Meta.jsx'
import MainControls from '../Main_Controls/Main_Controls.jsx'
import ProgressBar from '../Progress_Bar/ProgressBar.jsx'
import TunesList from '../Tunes/Tunes_List.jsx'
import SideMenu from '../Side_Menu/Side_Menu.jsx'


class Main extends React.Component{


	constructor(props){
		super(props)
		this.state={
			isTunesListActive: false
		}
		this.hideTunesList = this.hideTunesList.bind(this)
		this.showTunesList = this.showTunesList.bind(this)
	}

	showTunesList(){
		const tunes = document.querySelector('.tunes')
		const next = document.querySelector('.next')
		
		this.setState({
			isTunesListActive: true
		})

		next.style.display = 'none'
		tunes.classList.add('tunes-transition')
	}


	hideTunesList(){
		const tunes = document.querySelector('.tunes')
		const next = document.querySelector('.next')

		this.setState({
			isTunesListActive: false
		})

		tunes.classList.remove('tunes-transition')
		tunes.classList.add('tunes-transition-before-end')
		setTimeout(function(){
			tunes.classList.remove('tunes-transition-before-end')
			next.style.display = "flex"
		},1000)

	}

	render(){
		return(
			<div className="main">
				<BgImage />
				<UpperMenu 
					isTunes={this.state.isTunesListActive} />
				<CoverSlider />
				<Meta />
				<MainControls />
				<ProgressBar />
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