import React, {Component,Fragment} from 'react';
import request from 'superagent';


class SignIn extends Component {
	constructor(props)
	{
		super(props)
		this.state={login:"",mdp:""}
		this.handleChange=this.handleChange.bind(this)
		this.submited=this.submited.bind(this)
	}

	handleChange(event){
		this.setState({[event.target.name]:event.target.value})
	}

	submited(){

		console.log('response');
		request
			.post('http://localhost:8080/comptes/verifyLogin')
			.set('Content-Type', 'application/json')
			.send({ login: this.state.login, password: this.state.mdp })
			.end(function(err, res){
				if (res.status >= 200 && res.status < 300) {
					var url='http://localhost:3000/authentified/'
					const utilisateur=JSON.parse(res.text)
					url=url.concat(utilisateur.utilisateur.idUser)
					window.location.replace(url)
					return res;
				
				  } else {
					
				  }
			});  
	}
render(){
    return (

        <div className="d-flex justify-content-center h-100">
		<div className="card">
			<div className="card-header">
				<h3>Se Connecter</h3>
				
			</div>
			<div className="card-body">
				<form>
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"></span>
						</div>
						<input name="login" type="text" className="form-control" placeholder="username"
						onChange={this.handleChange}/>
						
					</div>
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"></span>
						</div>
						<input name="mdp" type="password" className="form-control" placeholder="password"
						onChange={this.handleChange}/>
					</div>
					<div className="row align-items-center remember">
						<input type="checkbox"/>Remember Me
					</div>
					<div className="form-group">
						<input onClick={this.submited} type="button" value="Login" className="btn float-right login_btn"/>
					</div>
				</form>
			</div>
			<div className="card-footer">
				<div className="d-flex justify-content-center links">
					Vous n'avez pas du Compte?<a href="#" onClick={this.props.clicked}>S'inscrire</a>
				</div>
				<div className="d-flex justify-content-center">
					<a href="">Vous avez Oublié le mot de passe?</a>
				</div>
			</div>
		</div>
	</div>

    );
}
}

export default SignIn