import React, {Component,Fragment} from 'react';
import Axios from 'axios';

class CompDetails extends Component {
	constructor(props){
		super(props)
		this.state={event: []}
    }
    
	componentWillMount()
	{
	
	}
	
  render() {
    return (
        <div className="event_title"><a href="#">{this.props.event.titre}</a></div>
    )};

}

export default CompDetails;