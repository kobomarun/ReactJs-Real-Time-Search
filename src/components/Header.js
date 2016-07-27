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
            <li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li>
            <li><a href="#">Link</a></li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li role="separator" className="divider"></li>
                <li><a href="#">Separated link</a></li>
                <li role="separator" className="divider"></li>
                <li><a href="#">One more separated link</a></li>
              </ul>
            </li>
          </ul>
          </div>
        </nav>
                
  )
};
 
export default Header;