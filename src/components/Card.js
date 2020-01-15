import React from 'react';

class Card extends React.Component{

    clicked(){
        window.print()
    }
    render(){
        return(
    <div className="lhome">
    <form>
    <button className="buttonn" onClick={this.clicked}>Imprimer</button>
    </form>
    
    <div className="wrapperr">
      <div className="containerr">
        <img src="logo.jpg" alt="" class="profile-imgg"/> 
        <div className="contentt">
          <div className="sub-contentt">
            <h1>LAAROUSSI HOUDA</h1>
            <span>@houdalaaroussi</span>
            <p>Team Leader</p>
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


