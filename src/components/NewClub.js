import React, {Component,Fragment} from 'react';
import request from 'superagent';


class NewClub extends Component {

	constructor(props)
	{
		super(props)
		this.state={"intitule":"","description":"","nom":"","email":"","age":""}
		this.handleChange=this.handleChange.bind(this)
		this.submited=this.submited.bind(this)
	}

	handleChange(event){
		this.setState({[event.target.name]:event.target.value})
	}

	submited(){

		console.log('response');
		request
			.post('http://localhost:8080/clubs/create')
			.set('Content-Type', 'application/json')
			.send({intitule:this.state.intitule,description:this.state.description,teamLeader:{nom:this.state.nom,email:this.state.email,age:this.state.age}})
			.end(function(err, res){
				if (res.status >= 200 && res.status < 300) {
					console.log(res.text)
					alert("hey")
					return res;
				
				  } else {
					alert("kayn chi mochkil")
				   console.log('fuck');
				  }
			});  
	}

render(){
    return (

		<div className="d-flex justify-content-center h-100" style={{padding:"100px",marginTop:"50px"}}>
		<div className="card" style={{width:"800px"}} >
			<div className="card-header" style={{textAlign:"center"}}>
				<h3 style={{position:"center"}}>Créer Un Nouveau Club</h3>
				<div className="d-flex justify-content-end social_icon">
					
				</div>
			</div>
			<div className="card-body">
				<form>
					<div className="input-group form-group">
						<input name="intitule" type="text" className="form-control" placeholder="Intitule du Club" onChange={this.handleChange}/>
					</div>
                    <div className="input-group form-group">
                        <input name="description" type="text" className="form-control" placeholder="Description" onChange={this.handleChange}/>
                    </div>
					<div className="input-group form-group">
                        <input name="nom" type="text" className="form-control" placeholder="Saisir votre nom" onChange={this.handleChange}/>
                    </div>
					<div className="input-group form-group">
                        <input name="email" type="email" className="form-control" placeholder="Confirmer votre Email" onChange={this.handleChange}/>
                    </div>
					<div className="input-group form-group">
                        <input name="age" type="text" className="form-control" placeholder="Confirmer votre age" onChange={this.handleChange}/>
                    </div>
                    
					
					<div className="form-group">
						<input onClick={this.submited} type="button" value="Annuler" className="btn float-right login_btn" style={{color:"yellow",backgroundColor:"grey"}}/>
						<input type="button" value="Créer" className="btn float-left login_btn"/>

					</div>
				</form>
			</div>
		</div>
	</div>

    );
}
}

export default NewClub