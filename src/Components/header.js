import React, {Component} from 'react';
import Logo from "./logo.png" ;



class Header extends Component{
    render(){
         return (
        <div className="header" >
            <img src={Logo}></img>
         </div>
        
        
      );
        
    }
}
 


export default Header;