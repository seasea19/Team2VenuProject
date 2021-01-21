import React from 'react';
import Fade from 'react-reveal/Fade';

import travel from '../../resources/images/projects/TravelSite.jpg'

const ColumnCards = () => {
    return (
        <Fade>
            <div className="center_wrapper">
                <h2>Highlights</h2>
                <div class="row-sim">
                    <div class="column-sim">
                        <div class="card-sim">
                            <h3>Travel Site</h3>
                            <img src= {travel} alt="" className="staff_pic"
                            style={{width:"100%",
                            height: "auto",
                            textAlign: "center"}}/>
                            <p>Some text</p>
                            
                        </div>
                    </div>

                    <div class="column-sim">
                        <div class="card-sim">
                            <h3>Card 1</h3>

                            <p>Some text</p>
                            
                        </div>
                    </div>

                    <div class="column-sim">
                        <div class="card-sim">
                            <h3>Card 1</h3>
                            <p>Some text</p>
                           
                        </div>
                    </div>

                </div>
            </div>
        </Fade>
    );
};

export default ColumnCards;