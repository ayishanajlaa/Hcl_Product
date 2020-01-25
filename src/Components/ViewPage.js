import React from 'react';
import StarRatings from 'react-star-ratings';
import { withRouter } from 'react-router-dom';
import BookRoom from './bookRoom'
import data from "../Data/data"; 

import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';


import hotel from '.././Data/Images/download (2).jpg'

const Hotel=data

class ViewPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          hotel:data,    modal:false,
        };
        this.toggle = this.toggle.bind(this);
      }
      toggle(){
        this.setState({modal:!this.state.modal})
      }


    render() {
     var key=this.props.history.location.state.data
     const { modal } = this.state;
        return (
            <div class="row align-items-center mx-5 my-5">
                <div className="mx-5 my-5">
                <Label for="roomType">Price </Label>
                
            <Input type="select" name="select" id="priceRange">
              <option>1000-5000</option>
              <option>5000-10000</option>
              <option>10000-15000</option>
              <option>15000-20000</option>
            </Input>
            </div>
            <div>
                <Label for="roomType">Rating</Label>
               
            <Input type="select" name="select" id="ratinng">
              <option>1 Star</option>
              <option>2 Star</option>
              <option>3 Star</option>
              <option>4 Star</option>
              <option>5 Star</option>
            </Input>
                </div>
                <br>
                </br>
                
                <div class="row">

                </div>

                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                                {this.state.hotel.map(s => (
                               key==s.location?
                                 <div class="row mx-5 my-3">
                                <div class="col">
                                <h2>{s.name}</h2>
                                 <p>{s.location}</p>
                                 <p>Room Price :<strike>1000</strike>&nbsp;{s.price}</p>
                                 <StarRatings
                                     rating={s.rating}
                                     starDimension="40px"
                                     starSpacing="15px"
                                 />
                                </div>
                                 <div class="col">
                                 <img class="img-circle" src={hotel} alt="Cinque Terre" width="304" height="236" />
                             </div>
                             <div class="col">
                                 <button class="btn btn-primary mx-3">View Details</button>
                                 <button class="btn btn-success mx-3">Book Room</button>
                             </div>
                             </div>:null
                                ))}

                                   
                               


                        </div>
                    </div>
                </div>

                <BookRoom modal={modal} toggle={this.toggle}/>

            </div>
        );
    }
}

export default withRouter(ViewPage);
