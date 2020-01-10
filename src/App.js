import React from 'react';
import Menu from './components/Menu.js'
import Footer from './components/Footer.js'
import Home from './components/Home.js'

class App extends React.Component {
  render() {
    return (
      <div className="super_container">  
        <Menu />
        <Home />
        <Footer />
      </div>    
      );
  }

}

export default App;
