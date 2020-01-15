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
                  <li><div className="question">Have any questions?</div></li>
                  <li>
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <div>001-1234-88888</div>
                  </li>
                  <li>
                    <i className="fa fa-envelope-o" aria-hidden="true"></i>
                    <div>info.deercreative@gmail.com</div>
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