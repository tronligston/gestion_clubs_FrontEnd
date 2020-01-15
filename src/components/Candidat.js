import React, {Component,Fragment} from 'react';
import Axios from 'axios';
import CondidatAffiche from './CondidatAffich'
import './styles.css';


class Condidat extends Component {
	constructor(props){
		super(props)
		this.state={condidats: []}
	}

	componentWillMount()
	{
		Axios.get('http://localhost:8080/candidatures/all').then(
			
			res=>{
				this.setState({condidats: res.data})
				console.log(this.state.condidats)
			})
	}
	
  render() {
	
    return (
<div className="events">
		<div className="container">
			<div className="row">
				<div className="col">
					<div className="section_title_container text-center">
						<h2 className="section_title">Liste des condidatures</h2>
					</div>
					
				</div>
			</div>
			<div className="row events_row">   
			<table id="tab">
					<tr>
						<th style={{width:"150px"}}>Nom complet</th>
						<th>email</th>
						<th>Club</th>
						<th>Motivation</th>
						<th>Skills</th>
						<th>date</th>
						<th>Décision</th>

					</tr>             
			{this.state.condidats.map(cond =>
					{
						return <CondidatAffiche condidat={cond} key={cond.idCandidature}/>
					})}
		
			</table>

			</div>
		</div>
	</div>

    )};

}

export default Condidat;

/* 


<div>
<fieldset>
<legend>Liste En Attente:</legend>
<table>

<tr>
          <td>event</td>
          <td>test</td>
          <td>test</td>
          <td>test</td>
          <td>test</td>
		  <td><input onClick={this.submited} type="button" value="Accepter"/><input onClick={this.submited} type="button" value="Accepter"/></td>

</tr>
</table>
</fieldset>
</div>
})
} 

*/