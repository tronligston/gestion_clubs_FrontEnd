import React from 'react';
import Menu2 from './Menu2.js'
import Footer from './Footer.js'
import ClubDetail from './ClubDetail'

class App3 extends React.Component {

  render() {
    return (
      <div className="super_container">  
        <Menu2 />
        <ClubDetail id={this.props.id}/>
        <Footer />
      </div>    
      );
  }

}

export default App3;
