import React from 'react';
import Menu2 from './Menu2.js'
import Footer from './Footer.js'
import RecrutementDetail from './RecrutementDetail.js'
import Candidature from './Candidature.js'

class App5 extends React.Component {
    constructor(props)
    {
        super(props)
        this.state={clicked:false,idClub:0}
        this.clicked=this.clicked.bind(this)
    }
    clicked=(Club)=>{
        this.setState(prevState => {
            return {clicked:!prevState.clicked,idClub:Club.idClub}
        })
    }

  render() {
    console.log(this.state)
    return (
      <div className="super_container">  
        <Menu2 />
        {this.state.clicked?<Candidature idClub={this.state.idClub} idUser={this.props.idUser}/>:<RecrutementDetail id={this.props.id} clicked={this.clicked} />}
        <Footer />
      </div>    
      );
  }

}

export default App5;
