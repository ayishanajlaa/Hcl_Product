import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,FormGroup,Label,Input } from 'reactstrap';


 class SupportBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           modal:false,
          };
        this.toggle = this.toggle.bind(this);
        this.submit = this.submit.bind(this);

      }

      toggle(){
          this.setState({modal:!this.state.modal})
      }

      submit(){
          alert("Submitted Sucessfully")
          this.setState({modal:!this.state.modal})

      }
 
 
  render() {
    const { modal } = this.state;
    return (
      <div>
           <Modal isOpen={modal} toggle={this.toggle} >
        <ModalHeader toggle={this.toggle}>Contact Us</ModalHeader>
        <ModalBody>
          <p>Email:<b>TravelEasy@gmail.com</b></p>
          <p>Phone:<b>9996667656</b></p> 
          <hr/>
          <FormGroup>
        <Label >Name</Label>
        <Input type="name" name="email"  placeholder="Enter Name" />
      </FormGroup>
      <FormGroup>
        <Label >Email</Label>
        <Input name="email"  placeholder="Enter Email" />
      </FormGroup>
      <FormGroup>
        <Label >Mobile No</Label>
        <Input  name="no"  placeholder=" Enter Mobile Numbr" />
      </FormGroup>
      <Button color="primary" onClick={this.submit}>Submit</Button>{' '}

        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={this.toggle}>Cancel</Button>{' '}
          
        </ModalFooter>
      </Modal>
       

      </div>
    );
  }
}

export default SupportBox;