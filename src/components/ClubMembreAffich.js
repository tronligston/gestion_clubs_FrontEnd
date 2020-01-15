import React, {Component,Fragment} from 'react';
import Condidat from './Candidat';
import './styles.css';


class ClubMembreAffich extends Component {
  render() {
	
    return (
       
				<tr>
                    <td>{this.props.membres.idUser}</td>
                    <td>{this.props.membres.nom}</td>
                    <td>{this.props.membres.email}</td>
                    <td>{this.props.membres.age}</td>
                    <td><input  type="button" value="Supprimer du Club"className="btn float-left login_btn"style={{color:"white",backgroundColor:"redb  ",width:"180px"}}/></td>
                </tr>
    )}

}

export default ClubMembreAffich