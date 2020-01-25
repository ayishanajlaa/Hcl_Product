import React from 'react';
<<<<<<< HEAD
function App() {
    return (
        <div class="row align-items-center mx-5 my-5">

            <div class="col-12">
                <div class="card">
                 <div class="card-body"> 
                 <h1>About this hotel</h1>     
                 <button class ="button">View Details</button>
                 <button class ="button">Book Details</button>    
                </div>  
                 </div>
                 </div>
                 <div class="col-12">
                <div class="card">
                 <div class="card-body">  
                 <h1>About this hotel</h1>     
                 <button class ="button">View Details</button>
                 <button class ="button">Book Details</button>          
        
                </div>  
                 </div>
                 </div>
                 <div class="col-12">
                <div class="card">
                 <div class="card-body">     
                 <h1>About this hotel</h1>     
                 <button class ="button">View Details</button>
                 <button class ="button">Book Details</button>         
     
                </div>  
                 </div>
                 </div>

        </div>
    );
=======
import ReactDOM from 'react-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,FormGroup,Label,Input } from 'reactstrap';
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";


 class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           loaction:'',from:new Date(),to:new Date(),type:''
          };
        this.handleLocation = this.handleLocation.bind(this);
        this.handleFromDate = this.handleFromDate.bind(this);;
        this.handleToDate = this.handleToDate.bind(this);;
        this.handleType = this.handleType.bind(this);;

      }

 handleLocation(e){
     this.setState({location:e.target.value})
 }
 handleFromDate(e){
    this.setState({from:e.target.value})
}
handleToDate(e){
    this.setState({to:e.target.value})
}
handleType(e){
    this.setState({type:e.target.value})

}
 
 
  render() {
    const { modal } = this.state;
    return (
        <div class="container">
         <div class="row align-items-center my-5">
    <div class="col">
    <FormGroup>
        Enter the location
        <Input type="name" name="email"  placeholder="Enter location"  onChange={this.handleLocation} />
      </FormGroup>    </div>
    <div class="col">
      check in Date
      <DatePicker
  selected={this.state.from}
  onSelect={this.handleSelect} //when day is clicked
  onChange={this.handleChange} //only when value has changed
/>
    </div>
    <div class="col">
    check out Date
      <DatePicker
  selected={this.state.to}
  onSelect={this.handleSelect} //when day is clicked
  onChange={this.handleChange} //only when value has changed
/>
    
    </div>
    <div class="col">
    <Label for="roomType">Room Type</Label>
        <Input type="select" name="select" id="roomType">
          <option>Single Room</option>
          <option>Double Room</option>
        </Input>
    </div>

  </div>
  <Button>Submit</Button>
      </div>
    );
  }
>>>>>>> 09f061f102eb6a1768c55e9449a7a2b23156960e
}

export default HomePage;