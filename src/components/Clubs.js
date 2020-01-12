import React, {Component,Fragment} from 'react';
import Club from './Club.js'
import Axios from 'axios';

class Clubs extends Component {
	constructor(props){
		super(props)
		this.state={clubs: []}
	}
	componentWillMount()
	{
		Axios.get('http://localhost:8080/clubs/all').then(
			res=>{
				this.setState({clubs: res.data})
			})
	}
	
  render() {
	  console.log(this.state.clubs)
    return (
        <div className="courses">
		<div className="section_background parallax-window" data-parallax="scroll" data-image-src="images/courses_background.jpg" data-speed="0.8"></div>
		<div className="container">
			<div className="row">
				<div className="col">
					<div className="section_title_container text-center">
						<h2 className="section_title">Liste des Clubs</h2>
					</div>
				</div>
			</div>
			<div className="row courses_row">
				
				{this.state.clubs.map(club =>
					{
						return <Club club={club} key={club.idClub}/>
					})}

				

			</div>
			<div className="row">
				<div className="col">
					<div className="courses_button trans_200"><a href="#">view all courses</a></div>
				</div>
			</div>
		</div>
	</div>
    )};
}

export default Clubs;