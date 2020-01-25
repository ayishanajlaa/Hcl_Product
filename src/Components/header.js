import React, {Component} from 'react';
import Logo from "./logo.png" ;
import Support from './supportDialogue'
import { withRouter } from 'react-router-dom';




class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
       modal:false,
      };
    this.support = this.support.bind(this);
    this.toggle = this.toggle.bind(this);

  }

support(){
  this.setState({modal:true})
}

toggle(){
  this.setState({modal:!this.state.modal})
}
  render() {
    const { modal } = this.state;
    return (
      <div>
        <nav class="navbar navbar-light bg-light">
          <a class="navbar-brand" style={{"cursor":"pointer"}}  onClick={() => { this.props.history.push('/') }}>Travel Easy</a>
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" onClick={this.support}>Support <span class="sr-only"></span></a>
            </li>
          </ul>
          <Support modal={modal} toggle={this.toggle}/>
        </nav>
      </div>
        
      );
        
    }
}
 


export default withRouter(Header);
