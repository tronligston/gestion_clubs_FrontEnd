import React, {Component,Fragment} from 'react';
import Axios from 'axios';
import Recrutement from './Recrutement';

class Recrutements extends Component {
	constructor(props){
		super(props)
		this.state={events: []}
	}
	componentWillMount()
	{
		Axios.get('http://localhost:8080/events/theme/recrutement').then(
			res=>{
				this.setState({events: res.data})
			})
	}
	
  render() {
    return (
<div className="events">
		<div className="container">
			<div className="row">
				<div className="col">
					<div className="section_title_container text-center">
						<h2 className="section_title">Liste des Recrutements </h2>
					</div>
				</div>
			</div>
			<div className="row events_row">

				{this.state.events.map(event =>{
					console.log(event)
					return <Recrutement idUser={this.props.idUser} event={event} key={event.idEvent}/>
				})}
                

			</div>
		</div>
	</div>

    )};

}

export default Recrutements;
