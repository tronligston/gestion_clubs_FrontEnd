import React, {Component,Fragment} from 'react';
import Condidat from './Candidat';
import './styles.css';


class CondidatAffich extends Component {
  render() {
	
    return (
       
					<tr>
						<td>{this.props.condidat.utilisateur.nom}</td>
						<td>{this.props.condidat.utilisateur.email}</td>
						<td>{this.props.condidat.club.intitule}</td>
						<td>{this.props.condidat.motivation}</td>
						<td>{this.props.condidat.skills}</td>
						<td>{this.props.condidat.dateCandidature}</td>
						<td><input  type="button" value="Accepter"className="btn float-left login_btn"style={{color:"green",backgroundColor:"grey"}}/>
                        <input  type="button" value="Refuser"className="btn float-right login_btn"style={{color:"red",backgroundColor:"grey"}}/></td>
					</tr>
    )}

}

export default CondidatAffich