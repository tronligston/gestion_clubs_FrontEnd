import React, {Component,Fragment} from 'react';
import request from 'superagent';


class SignUp extends Component {

	constructor(props)
	{
		super(props)
		this.state={"login":"","password":"","nom":"","email":"","age":""}
		this.handleChange=this.handleChange.bind(this)
		this.submited=this.submited.bind(this)
	}

	handleChange(event){
		this.setState({[event.target.name]:event.target.value})
	}

	submited(){

		console.log('response');
		request
			.post('http://localhost:8080/comptes/register')
			.set('Content-Type', 'application/json')
			.send({login:this.state.login,password:this.state.password,utilisateur:{nom:this.state.nom,email:this.state.email,age:this.state.age}})
			.end(function(err, res){
				if (res.status >= 200 && res.status < 300) {
					var url='http://localhost:3000/authentified/'
					const utilisateur=JSON.parse(res.text)
					url=url.concat(utilisateur.utilisateur.idUser)
					window.location.replace(url)
					return res;
				
				  } else {
					alert("kayn chi mochkil")
				  }
			});  
	}

render(){
    return (

        <div className="d-flex justify-content-center h-100">
		<div className="card">
			<div className="card-header">
				<h3>Sign Up</h3>
				<div className="d-flex justify-content-end social_icon">
					<span><i className="fab fa-facebook-square"></i></span>
					<span><i className="fab fa-google-plus-square"></i></span>
					<span><i className="fab fa-twitter-square"></i></span>
				</div>
			</div>
			<div className="card-body">
				<form>
					<div className="input-group form-group">
						<input name="nom" type="text" className="form-control" placeholder="Nom" onChange={this.handleChange}/>
						
					</div>
                    <div className="input-group form-group">
                        <input name="login" type="text" className="form-control" placeholder="Login" onChange={this.handleChange}/>
                    </div>
                    <div className="input-group form-group">
                        <input name="age" type="number" className="form-control" placeholder="Age" onChange={this.handleChange}/>
                    </div>
                    <div className="input-group form-group">
                        <input name="email" type="email" className="form-control" placeholder="Email" onChange={this.handleChange}/>
                    </div>
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"></span>
						</div>
						<input name="password" type="password" className="form-control" placeholder="Password" onChange={this.handleChange}/>
					</div>
                    <div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"></span>
						</div>
						<input type="password" className="form-control" placeholder="Confirm password" onChange={this.handleChange}/>
					</div>
					<div className="form-group">
						<input onClick={this.submited} type="button" value="Register" className="btn float-right login_btn"/>
					</div>
				</form>
			</div>
			<div className="card-footer">
				<div className="d-flex justify-content-center links">
					You have an account?<a href="#" onClick={this.props.clicked}>Sign In</a>
				</div>
			</div>
		</div>
	</div>

    );
}
}

export default SignUp