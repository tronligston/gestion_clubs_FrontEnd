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
					alert("Marhba")
					return res;
				
				  } else {
					alert("fin ghadi fin awa ghadi")
				   console.log('fuck');
				  }
			});  
	}
render(){
	console.log(this.state.login)
	console.log(this.state.mdp)
    return (

        <div className="d-flex justify-content-center h-100">
		<div className="card">
			<div className="card-header">
				<h3>Sign In</h3>
				<div className="d-flex justify-content-end social_icon">
					<span><i className="fab fa-facebook-square"></i></span>
					<span><i className="fab fa-google-plus-square"></i></span>
					<span><i className="fab fa-twitter-square"></i></span>
				</div>
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
					Don't have an account?<a href="#" onClick={this.props.clicked}>Sign Up</a>
				</div>
				<div className="d-flex justify-content-center">
					<a href="#">Forgot your password?</a>
				</div>
			</div>
		</div>
	</div>

    );
}
}

export default SignIn