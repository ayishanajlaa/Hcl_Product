import React, {Component} from 'react';
import Logo from "./logo.png" ;

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';


class Header extends Component{
    render(){
         return (
        <div className="header" >
            <img sizes='40px' src={Logo}></img>
            </div>
      );
        
    }
}
 


export default Header;