import React, {Component,Fragment} from 'react';
import Axios from 'axios';
import Evenement from './Evenement';

class Evenements extends Component {
	constructor(props){
		super(props)
		this.state={events: []}
	}
	componentWillMount()
	{
		Axios.get('http://localhost:8080/events/all').then(
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
						<h2 className="section_title">Liste d'événements</h2>
					</div>
				</div>
			</div>
			<div className="row events_row">

				{this.state.events.map(event =>{
					console.log(event)
					return <Evenement event={event} key={event.idEvent}/>
				})}
                

			</div>
		</div>
	</div>

    )};

}

export default Evenements;
