import React from 'react';
import StarRatings from 'react-star-ratings';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';
import GoogleMapReact from 'google-map-react';
import hotel from '.././Data/Images/download (2).jpg'
const AnyReactComponent = ({ text }) => <div>{text}</div>;





class ViewPage extends React.Component {
    static defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
      };
    render() {

        return (
            <div class="row align-items-center mx-5 my-5">
                <div>
                <Label for="roomType">Price Range</Label>
                
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
                            <div class="row">
                                <div class="col">
                                    <h2>Hotel Taj</h2>
                                    <p>Near Vegacitymall,banglore</p>
                                    <p>Room Price :<strike>1000</strike>&nbsp;900</p>
                                    <StarRatings
                                        rating={3}
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
                            </div>


                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default ViewPage;