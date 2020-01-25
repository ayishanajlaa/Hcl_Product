import React from 'react';
import StarRatings from 'react-star-ratings';

import hotel from '.././Data/Images/download (2).jpg'


class ViewPage extends React.Component {
    render() {
        return (
            <div class="row align-items-center mx-5 my-5">
                <p>Search Results Are:-</p>
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