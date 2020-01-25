import React, {Component} from 'react';
import Logo from "./logo.png" ;


class Footer extends Component{
    render(){
         return (
        <div className="footer" >
            <img  src={Logo}></img>
            </div>
      );
        
    }
}
 


export default Footer;