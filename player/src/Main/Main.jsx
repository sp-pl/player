import React from 'react'

import UpperMenu from '../Upper_Menu/Upper_Menu.jsx'
import Slider from '../Slider/Slider.jsx'
import Meta from '../Meta/Meta.jsx'
import MainControls from '../Main_Controls/Main_Controls.jsx'
import TunesList from '../Tunes/Tunes_List.jsx'

class Main extends React.Component{


	render(){
		return(
			<div className="main">
				<UpperMenu />
				<Slider />
				<Meta />
				<MainControls />
				<TunesList />
				

			</div>

		)
	}




}

export default Main;