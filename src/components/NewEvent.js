import React, {Component,Fragment} from 'react';
import request from 'superagent';


class NewEvent extends Component {

	constructor(props)
	{
		super(props)
		this.state={"titre":"","theme":"","lieu":"","dateDebut":"","dateFin":"","description":""}
		this.handleChange=this.handleChange.bind(this)
		this.submited=this.submited.bind(this)
		this.done=this.done.bind(this)
	}

	handleChange(event){
		this.setState({[event.target.name]:event.target.value})
	}
	done(){
		var url='http://localhost:3000/authentified/'
					url=url.concat(this.props.idUser)
					window.location.replace(url)
	}

	submited(){

		console.log('response');
		request
			.post('http://localhost:8080/events/create')
			.set('Content-Type', 'application/json')
			.send({titre:this.state.titre,theme:this.state.theme,lieu:this.state.lieu,dateDebut:this.state.dateDebut,dateFin:this.state.dateFin,description:this.state.description})
			.end(function(err, res){
				if (res.status >= 200 && res.status < 300) {
					
					
				
				  } else {
				
				   console.log('fuck');
				  }
			});  
			this.done()
	}

    render(){
		console.log(this.props)
        return(

            <div className="d-flex justify-content-center h-100" style={{padding:"100px",marginTop:"50px"}}>
		<div className="card" style={{width:"800px"}} >
			<div className="counter_form_title" style={{textAlign:"center"}}>
				<h3 style={{position:"center"}}>Créer Un Nouveau Evenement</h3>
				<div className="d-flex justify-content-end social_icon">
					
				</div>
			</div>
			<div className="card-body" style={{backgroundColor:"#DCDCDC	"}}>
				<form>
					<div className="input-group form-group">
						<input name="titre" type="text" className="counter_input" placeholder="Titre" onChange={this.handleChange}/>
					</div>
                    <div className="input-group form-group">
                        <input name="theme" type="text" className="counter_input" placeholder="Thème" onChange={this.handleChange}/>
                    </div>

                    <div className="input-group form-group">
                        <input name="lieu" type="text" className="counter_input" placeholder="Lieu" onChange={this.handleChange}/>
                    </div>
                    <h6>Date de Début :</h6>
                    <div className="input-group form-group">
                    <input type="datetime-local" name="dateDebut" className="counter_input" style={{width:"500px"}} onChange={this.handleChange}></input>
                    </div>
                    <h6>Date Fin :</h6>

                    <div className="input-group form-group">

                    <input type="datetime-local" name="dateFin" className="counter_input" style={{width:"500px"}} onChange={this.handleChange}></input>
                    </div>
                    
                     <textarea name="description" class="counter_input counter_text_input" placeholder="Description:" required="required" onChange={this.handleChange}></textarea>
                     
                    <input onClick={this.submited} type="button" value="Créer" className="counter_form_button"/>
						<input onClick={this.submited} type="button" value="Annuler" className="counter_form_button" style={{backgroundColor:"#C0C0C0"}}/>

				</form>
			</div>
		</div>
	</div>

    )};
}

export default NewEvent