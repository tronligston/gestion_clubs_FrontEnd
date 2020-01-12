import React, {Component,Fragment} from 'react';


class SignUp extends Component {

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
						<input type="text" className="form-control" placeholder="Nom"/>
						
					</div>
                    <div className="input-group form-group">
                        <input type="text" className="form-control" placeholder="Prenom"/>
                    </div>
                    <div className="input-group form-group">
                        <input type="number" className="form-control" placeholder="Age"/>
                    </div>
                    <div className="input-group form-group">
                        <input type="email" className="form-control" placeholder="Email"/>
                    </div>
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"></span>
						</div>
						<input type="password" className="form-control" placeholder="Password"/>
					</div>
                    <div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"></span>
						</div>
						<input type="password" className="form-control" placeholder="Confirm password"/>
					</div>
					<div className="form-group">
						<input type="submit" value="Register" className="btn float-right login_btn"/>
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