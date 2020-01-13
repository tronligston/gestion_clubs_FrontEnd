import React from 'react';
import Menu2 from './Menu2.js'
import Footer from './Footer.js'
import EvenementDetail from './EvenementDetail.js'

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
        <Menu2 />
        <EvenementDetail id={this.props.id}/>
        <Footer />
      </div>    
      );
  }

}

export default App;
