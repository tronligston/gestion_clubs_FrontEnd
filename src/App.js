import React from 'react';
import Menu from './components/Menu.js'
import Footer from './components/Footer.js'
import Home from './components/Home.js'
import Evenements from './components/Evenements.js'

class App extends React.Component {
  constructor(props)
  {
    super(props)
    this.state={selected:''}
  }
  render() {
    return (
      <div className="super_container">  
        <Menu />
        <Evenements />
        {/*<Home />*/}
        <Footer />
      </div>    
      );
  }

}

export default App;
