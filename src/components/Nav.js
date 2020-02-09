import piggy from '../porco.png'
import React from 'react'

const Nav = (props) => {
	return (
		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span>
			<hr></hr>
			Sort Hogs 
			<select onChange={props.handleChange}>
				<option selected value="no sort">No Sort</option>
				<option value="name">By Name</option>
				<option value="weight">By Weight</option>
			</select>
			<button onClick={props.switchBetwGreased}>Show {props.showGreased ? "Not Greased" : "Greased"}</button>
		</div>
	)
}

export default Nav
