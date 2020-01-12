import React, {Component,Fragment} from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

class SignInUp extends Component {

    constructor(props){
        super(props)
        this.state={SignIn:true}
        this.clicked=this.clicked.bind(this)
    }
    clicked=()=>{
        this.setState(prevstate=>{
            return {SignIn:!prevstate.SignIn}
        })
        
    }
  render() {
    console.log(this.state.SignIn)
    return (
<div className="bodyMehdi">
<div className="containerMehdi">
	{this.state.SignIn?<SignIn clicked={this.clicked}/>:<SignUp clicked={this.clicked}/>}
</div>
</div>
    )}
}

export default SignInUp