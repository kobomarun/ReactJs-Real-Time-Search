import React from 'react';
import logo from '../logo.svg';

const Header = () => {
  return (

        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#"><img src={logo} className="olu-logo" alt="logo" /></a>
            </div>

          <ul className="nav navbar-nav">
            <li className="active"><a href="#">Home <span className="sr-only">(current)</span></a></li>
            <li><a href="#">All JS Libraries</a></li>
          </ul>
          </div>
        </nav>
                
  )
};
 
export default Header;