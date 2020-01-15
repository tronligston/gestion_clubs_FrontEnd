import React from 'react';
import Menu2 from './Menu2.js'
import Footer from './Footer.js'
import RecrutementDetail from './RecrutementDetail.js'
import Candidature from './Candidature.js'

class App5 extends React.Component {
    constructor(props)
    {
        super(props)
        this.state={clicked:false}
        this.clicked=this.clicked.bind(this)
    }
    clicked=()=>{
        this.setState(prevState => {
            return {clicked:!prevState.clicked}
        })
    }

  render() {
    return (
      <div className="super_container">  
        <Menu2 />
        {this.state.clicked?<Candidature />:<RecrutementDetail id={this.props.id} idUser={this.props.idUser} clicked={this.clicked}/>}
        <Footer />
      </div>    
      );
  }

}

export default App5;
