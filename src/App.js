import React from 'react';
import Menu from './components/Menu.js'
import Footer from './components/Footer.js'
import Home from './components/Home.js'
import Evenements from './components/Evenements.js'
import Clubs from './components/Clubs.js'
import SignInUp from './components/SignInUp.js'

// first app ever
class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state={selected:'home'};
    this.menuClicked=this.menuClicked.bind(this);
  }
  menuClicked = (li_Clicked)=>{
    this.setState({selected:li_Clicked})
  }

  render() {
    return (
      <div className="super_container">  
        <Menu menuClicked={this.menuClicked} selected={this.state.selected} />
        {this.state.selected=="home"&&<Home />}
        {this.state.selected=="event"&&<Evenements />}
        {this.state.selected=="clubs"&&<Clubs />}
        {this.state.selected=="signInUp"&&<SignInUp />}
        <Footer />
      </div>    
      );
  }

}

export default App;
