import React, {Component,Fragment} from 'react';
import Axios from 'axios'
class Candidature extends Component {
	constructor(props)
	{
		super(props)
		this.state={email:'',comp:'',motiv:''}
		this.handleChange=this.handleChange.bind(this)
		this.submited=this.submited.bind(this)
	}

	 handleChange(event) {
		this.setState({[event.target.name]:event.target.value})
	}

	submited(){
		console.log(this.props)
		var url1='http://localhost:8080/users/all/'
		url1=url1.concat(this.props.idUser)
		var url2='http://localhost:8080/clubs/search/'
		url2=url2.concat(this.props.idClub)
		var user,club,data;
		
		Axios.get(url2).then(
			res=>{
				club=res.data
				Axios.get(url1).then(
					res=>{
						user=res.data
						data={"club":club,"utilisateur":user,"motivation":this.state.motiv,"skills":this.state.motiv}
						Axios.post('http://localhost:8080/candidatures/create',data).then(res => {
							console.log(res);
						  })
						
					})
			})
        
	}
	
render(){
	console.log(this.props)
    return(

<div className="events2">

	<div className="contact">
		

		<div className="contact_info_container">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="contact_form">
							<div className="contact_info_title">Rejoignez nous ! </div>
							<form className="comment_form">
								<div>
									<div  className="form_title">Email</div>
									<input onChange={this.handleChange} name="email" type="text" className="comment_input" required="required"/>
								</div>
								<div>
									<div  className="form_title">Compétences  </div>
									<input onChange={this.handleChange} name="comp" type="text" className="comment_input" required="required"/>
								</div>
								<div>
									<div className="form_title">Motivation</div>
									<textarea onChange={this.handleChange} name="motiv" className="comment_input comment_textarea" required="required" maxlength="200"></textarea>
								</div>
								<div>
									<button type="button" onClick={this.submited} className="comment_button trans_200">Envoyer</button>
								</div>
							</form>
						</div>
					</div>

					
					<div className="col-lg-6">
						<div className="contact_info">
							<div className="contact_info_title">Informations</div>
							<div className="contact_info_text">
								<p>Une fois vous envoyez votre candidature ,elle va être traitée par l'équipe ressources humaines du club concerné,et vous allez reçevoir la réponse le plus tôt possibe : <b> Stay Tuned </b> </p>
							</div>
							
							<div className="contact_info_location">
								<div className="contact_info_location_title">C'est le moment pour </div>
								<ul className="location_list">
									<li>Developper vos compétences </li>
									<li>Sortir de votre "confort zone"</li>
									<li>Vivre de nouvelles expériences</li>
									<li>Découvrir de nouveaux talents</li>
								</ul>
							</div>

							<div className="contact_info_location">
								<div className="contact_info_location_title">Faculté des Sciences et Techniques de SETTAT</div>
								<ul className="location_list">
									<li>FST de Settat, Km 3, B.P. : 577 Route de Casablanca</li>
									<li>Tél : 0523 40 07 36</li>
									<li>info.deercreative@gmail.com</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>


</div>

  )};
}

export default  Candidature