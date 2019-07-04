import React from 'react'
import BgImage from '../Bg_Image/BgImage.jsx'
import UpperMenu from '../Upper_Menu/Upper_Menu.jsx'
import CoverSlider from '../Slider/Slider.jsx'
import Meta from '../Meta/Meta.jsx'
import MainControls from '../Main_Controls/Main_Controls.jsx'
import TunesList from '../Tunes/Tunes_List.jsx'
import SideMenu from '../Side_Menu/Side_Menu.jsx'

class Main extends React.Component{


	render(){
		return(
			<div className="main">
				<BgImage />
				<UpperMenu />
				<CoverSlider />
				<Meta />
				<MainControls />
				<TunesList />
				<SideMenu />
				

			</div>

		)
	}




}

export default Main;