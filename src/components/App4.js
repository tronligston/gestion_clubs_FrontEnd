import React from 'react';
import Menu from './Menu.js'
import Footer from './Footer.js'
import Home from './Home.js'
import Evenements from './Evenements.js'
import Clubs from './Clubs.js'
import SignInUp from './SignInUp.js'
import Axios from 'axios';
import MenuMembreAvecCompte from './MenuMembreAvecCompte.js'
import MenuAdministrateur from './MenuAdministrateur.js'
import MenuTeamLeader from './MenuTeamLeader.js'
import MenuMembreAdherant from './MenuMembreAdherant.js'
import Recrutements from './Recrutements.js'
import Candidature from './Candidature'

// first app ever
class App4 extends React.Component {
  constructor(props)
  {
    super(props);
    this.state={selected:'home',role:'',user:{}};
    this.menuClicked=this.menuClicked.bind(this);
  }
  menuClicked = (li_Clicked)=>{
    this.setState({selected:li_Clicked})
  }

  componentDidMount()
  {
    var url='http://localhost:8080/users/roleOfUser/'.concat(this.props.id)
    Axios.get(url).then(
        res=>{
            this.setState(prevState=>
                {
                    return {selected:prevState.selected,role:res.data,user:prevState.user}
                })
        })
    var url='http://localhost:8080/users/all/'.concat(this.props.id)
    Axios.get(url).then(
        res=>{
            this.setState(prevState=>
                {
                    return {selected:prevState.selected,role:prevState.role,user:res.data}
                })
        })
  }

  render() {
      console.log(this.state)
    return (
      <div className="super_container">  
        {/*<Menu menuClicked={this.menuClicked} selected={this.state.selected} />*/}
        {this.state.role=="Utilisateur"&&<MenuMembreAvecCompte menuClicked={this.menuClicked} selected={this.state.selected}/>}
        {this.state.role=="admin"&&<MenuAdministrateur menuClicked={this.menuClicked} selected={this.state.selected}/>}
        {this.state.role=="membre"&&<MenuMembreAdherant menuClicked={this.menuClicked} selected={this.state.selected}/>}
        {this.state.role=="TeamLeader"&&<MenuTeamLeader menuClicked={this.menuClicked} selected={this.state.selected}/>}
        {this.state.selected=="home"&&<Home />}
        {this.state.selected=="event"&&<Evenements />}
        {this.state.selected=="clubs"&&<Clubs />}
        {this.state.selected=="recrutements"&&<Recrutements idUser={this.props.id}/>}
        {this.state.selected=="signInUp"&&<SignInUp />}
        {this.state.selected=="candidatures"&&<Candidature />}
        <Footer />
      </div>    
      );
  }

}

export default App4;
