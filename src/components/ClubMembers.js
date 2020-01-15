import React, {Component,Fragment} from 'react';
import Axios from 'axios';
import './styles.css';
import ClubMembreAffich from './ClubMembreAffich'


class ClubMembres extends Component {
	constructor(props){
		super(props)
		this.state={membres: []}
	}

	componentWillMount()
	{
		Axios.get('http://localhost:8080/clubs/allMembers/11').then(
			
			res=>{
				this.setState({membres: res.data})
			})
	}
	
  render() {
	
    return (
<div className="events">
		<div className="container">
			<div className="row">
				<div className="col">
					<div className="section_title_container text-center">
						<h2 className="section_title">Liste des Membres de Votre Club</h2>
					</div>
					
				</div>
			</div>
			<div className="row events_row">   
			<table id="tab">
					<tr>
						<th style={{width:"150px"}}>IdUser</th>
						<th>Nom Complet</th>
						<th>Email</th>
						<th>Age</th>
						<th>Décision</th>

					</tr>             
			{this.state.membres.map(membres =>
					{
                        
                 return <ClubMembreAffich membres={membres} key={membres.idUser}/>

                    
					})}
		
			</table>

			</div>
		</div>
	</div>

    )};

}

export default ClubMembres;
