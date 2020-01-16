import React from 'react';


class Menu extends React.Component {

  render() {
    return (

  <React.Fragment>
  <header className="header">
    
    <div className="top_bar">
      <div className="top_bar_container">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="top_bar_content d-flex flex-row align-items-center justify-content-start">
                <ul className="top_bar_contact_list">
                  <li><div className="question">Université Hassan 1er. Faculté des Sciences et Techniques de Settat. </div></li>
                  <li>
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <div>BP 577. 26000 Settat. Tél : 0523 40 07 36 Fax : 0523 40 09 69 </div>
                  </li>
                  <li>
                   
                    <div>figi5p@gmail.com</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>        
    </div>
  
    
    <div className="header_container">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="header_content d-flex flex-row align-items-center justify-content-start">
              <div className="logo_container">
                <a href="#">
                  <div className="logo_text"><span>Clubs</span>Universitaire</div>
                </a>
              </div>
              <nav className="main_nav_contaner ml-auto">
                <ul className="main_nav">
                  <li className={this.props.selected=='home'&&"active"}
                      onClick={this.props.menuClicked.bind(this,'home')}>
                    <a href="javascript:void(0)">Acceuil</a>
                  </li>
                  <li className={this.props.selected=='clubs'&&"active"}>
                    <div class="dropdown">
                      <a className="dropbtn" href="javascript:void(0)">Mon Club</a>
                      <div class="dropdown-content">
                        <a href="javascript:void(0)" onClick={this.props.menuClicked.bind(this,'membres')} >membres </a>
                        <a onClick={this.props.menuClicked.bind(this,'candidatures')}
                           href="javascript:void(0)">Candidatures</a>
                        <a  onClick={this.props.menuClicked.bind(this,'card')} href="javascript:void(0)">Carte Adhésion</a>
                      </div>
                    </div>
                  </li>
                 <li className={this.props.selected=='newevent'&&"active"}
                      onClick={this.props.menuClicked.bind(this,'newevent')}>
                    <div class="dropdown">
                      <a className="dropbtn" href="javascript:void(0)"  onClick={this.props.menuClicked.bind(this,'event')}>Evenements</a>
                      <div class="dropdown-content">
                        <a href="javascript:void(0)  onClick={this.props.menuClicked.bind(this,'newevent')}" >Création </a>
                       
                      </div>
                    </div>
                  </li>
                   <li className={this.props.selected=='recrutements'&&"active"}
                      onClick={this.props.menuClicked.bind(this,'recrutements')}>
                    <a href="javascript:void(0)">Recrutements</a>
                  </li>
                  
                  
                  <li className="login_button"
                      onClick={this.props.menuClicked.bind(this,'signInUp')}>
                    <a href="#">Se déconnecter</a></li>
                </ul>
                
  
                
  
                
                <div className="hamburger menu_mm">
                  <i className="fa fa-bars menu_mm" aria-hidden="true"></i>
                </div>
              </nav>
  
            </div>
          </div>
        </div>
      </div>
    </div>
  
    
    <div className="header_search_container">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="header_search_content d-flex flex-row align-items-center justify-content-end">
              <form action="#" className="header_search_form">
                <input type="search" className="search_input" placeholder="Search" required="required"/>
                <button className="header_search_button d-flex flex-column align-items-center justify-content-center">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>      
    </div>      
  </header>
  
  <div className="menu d-flex flex-column align-items-end justify-content-start text-right menu_mm trans_400">
          <div className="menu_close_container"><div className="menu_close"><div></div><div></div></div></div>
          <div className="search">
              <form action="#" className="header_search_form menu_mm">
                  <input type="search" className="search_input menu_mm" placeholder="Search" required="required"/>
                  <button className="header_search_button d-flex flex-column align-items-center justify-content-center menu_mm">
                      <i className="fa fa-search menu_mm" aria-hidden="true"></i>
                  </button>
              </form>
          </div>
          <nav className="menu_nav">
              <ul className="menu_mm">
                  <li className="menu_mm"><a href="index.html">Home</a></li>
                  <li className="menu_mm"><a href="#">About</a></li>
                  <li className="menu_mm"><a href="#">Courses</a></li>
                  <li className="menu_mm"><a href="#">Blog</a></li>
                  <li className="menu_mm"><a href="#">Page</a></li>
                  <li className="menu_mm"><a href="contact.html">Contact</a></li>
              </ul>
          </nav>
      </div>
      </React.Fragment>
    );}

}

export default Menu;