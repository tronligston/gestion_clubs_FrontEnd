import React from 'react';
import Menu2 from './Menu2.js'
import Footer from './Footer.js'
import EvenementDetail from './EvenementDetail.js'

class App2 extends React.Component {

  render() {
    return (
      <div className="super_container">  
        <Menu2 />
        <EvenementDetail id={this.props.id}/>
        <Footer />
      </div>    
      );
  }

}

export default App2;
