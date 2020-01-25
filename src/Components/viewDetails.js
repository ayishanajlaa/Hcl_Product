import React, {Component} from 'react';
import {  Row, Col, Button } from 'reactstrap';
import icon from "../Data/Images/download (2).jpg"
import  GoogleMapReact from 'google-map-react'
import BookRoom from './bookRoom'


const AnyReactComponent = ({ text }) => <div>{text}</div>;
const description = `Location
    MS residency is a homely stay designed on the Mysore road in Bidadi area in Bengaluru. You can visit the famous Bangalore Palace, Tipu Sultan’s Summer Palace, HAL Heritage Centre and Aerospace Museum located safe driving distance from the hotel area.
    Special Features
    The rooms have standard false ceiling design with cove space for highlighting `

class ViewDetails extends Component {
    static defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
      };

      constructor(props) {
        super(props);
        this.state = {
       modal:false,
        };
        this.toggle = this.toggle.bind(this);

      }
     
      toggle(){
        this.setState({modal:!this.state.modal})
      }


  render(){


    return (
        <>
            <div float='left'>
            <h4>Hotel TAJ</h4>
                <img src={icon}></img>
                <Row className="my-5 align-items-center">
                    <Col>
                        <h4>Description</h4>

                        <p>{description}</p>
                    </Col>
                    <Col>
                        <h2>Amenities</h2>

                        
                          <br />
                         <br />
                         <ul style={{"listStyle":"none"}}>
                             <li>Wifi</li>
                             <li>Swimming POOL</li>
                             <li>Geaser</li>
                         </ul>
                      
                       
                        <Button className="btn btn-sucess mx-3"  onClick={this.toggle}>Book now</Button>
                    </Col>
                    {/* </Row>
                    <Row> */}
                    <div style={{ height: '50vh', width: '50%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:' AIzaSyB7xzCNCpATIDGaX2OgWF6xcRTSwmmEpfY '}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
        </div>
                </Row>
                <BookRoom modal={this.state.modal} toggle={this.toggle}/>

            </div>
        </>
    );


}
}


export default ViewDetails;