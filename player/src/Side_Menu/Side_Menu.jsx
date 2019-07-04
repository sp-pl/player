import React from 'react'

import Meta from '../Meta/Meta.jsx'

class SideMenu extends React.Component{

	render(){
		return(
			<div className="sideMenu">
				<Meta />
				<div className="dots">

				</div>
				<button>Add to playlist</button>
				<button>Show album</button>
				<button>Share with friends</button>
			</div>
		)
	}


}

export default SideMenu;