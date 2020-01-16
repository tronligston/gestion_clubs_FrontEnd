import React from 'react';
import Axios from 'axios';

class Card extends React.Component{

  constructor(props)
  {
    super(props)
    this.state={user:{}}
  }

    clicked(){
        window.print()
    }
    componentDidMount()
    {
      var url1='http://localhost:8080/users/all/'
      url1=url1.concat(this.props.idUser)
      Axios.get(url1).then(
        res=>{
          this.setState({user: res.data})
              })
    }
    render(){
      console.log(this.state)
        return(
    <div className="lhome">
    <form>
    <button className="buttonn" onClick={this.clicked}>Imprimer</button>
    </form>
    
    <div className="wrapperr">
      <div className="containerr">
       
        <img src="images/logo.jpg" alt="" class="profile-imgg"/>
        <div className="contentt">
          <div className="sub-contentt">
            <h1>{this.state.user.nom}</h1>
            <span>{this.state.user.email}</span>
            <p>Membre</p>
            <span className="locationn"><i className="faa fa-map-markerr" aria-hidden="true"></i>Maroc</span>
            <a href="#">C.O.D.E</a>
          </div>
          <br/><br/> 
        </div>
    </div>
    </div> 
    </div>
    )};

    
}

export default Card;


