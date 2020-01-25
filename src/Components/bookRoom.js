import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,FormGroup,Label,Input } from 'reactstrap';


 class BookRoom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           modal:this.props.modal,
          };
        this.submit = this.submit.bind(this);

      }

    

      submit(){
          alert(" Booked room Sucessfully")

      }
 
 
  render() {
    const { modal } = this.props;
    return (
      <div>
           <Modal isOpen={modal} toggle={this.props.toggle} >
        <ModalHeader toggle={this.props.toggle}>Contact Us</ModalHeader>
        <ModalBody>
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
      <Button color="primary" >Book Room</Button>{' '}

        </ModalBody>
        <ModalFooter>          
        </ModalFooter>
      </Modal>
       

      </div>
    );
  }
}

export default BookRoom;