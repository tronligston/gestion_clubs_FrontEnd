import React,{Fragment} from 'react';


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
                  <li><div className="question">Avez-vous des quesions?</div></li>
                  <li>
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <div>05 85 84 84 83</div>
                  </li>
                  <li>
                    <i className="fa fa-envelope-o" aria-hidden="true"></i>
                    <div>club_fsts@gmail.com</div>
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
                <a href="javascript:void(0)">
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
                      <a  href="javascript:void(0)">Evenements </a>
                      <a  onClick={this.props.menuClicked.bind(this,'card')}     href="javascript:void(0)">Carte Adhésion</a>
                    </div>
                    </div>
                  </li>
                  
                  
                  <li className={this.props.selected=='event'&&"active"}
                      onClick={this.props.menuClicked.bind(this,'event')}>
                    <a href="javascript:void(0)">Evenements</a>
                  </li>
                   <li className={this.props.selected=='recrutements'&&"active"}
                      onClick={this.props.menuClicked.bind(this,'recrutements')}>
                    <a href="javascript:void(0)">Recrutements</a>
                  </li>
                 
                  
                  <li className="login_button"
                      onClick={this.props.menuClicked.bind(this,'signInUp')}>
                    <a href="javascript:void(0)">Se déconnecter</a></li>
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
                  <li className="menu_mm"><a href="javascript:void(0)">About</a></li>
                  <li className="menu_mm"><a href="javascript:void(0)">Courses</a></li>
                  <li className="menu_mm"><a href="javascript:void(0)">Blog</a></li>
                  <li className="menu_mm"><a href="javascript:void(0)">Page</a></li>
                  <li className="menu_mm"><a href="contact.html">Contact</a></li>
              </ul>
          </nav>
      </div>
      </React.Fragment>
    );}

}

export default Menu;