import React from 'react';
import Fade from 'react-reveal/Fade';

const ColumnCards = () => {
    return (
        <Fade>
            <div className="center_wrapper">
                <h2>Highlights</h2>
                <div class="row-sim">
                    <div class="column-sim">
                        <div class="card-sim">
                            <h3>Card 1</h3>
                            <p>Some text</p>
                            <p>Some text</p>
                        </div>
                    </div>

                    <div class="column-sim">
                        <div class="card-sim">
                            <h3>Card 1</h3>
                            <p>Some text</p>
                            <p>Some text</p>
                        </div>
                    </div>

                    <div class="column-sim">
                        <div class="card-sim">
                            <h3>Card 1</h3>
                            <p>Some text</p>
                            <p>Some text</p>
                        </div>
                    </div>

                </div>
            </div>
        </Fade>
    );
};

export default ColumnCards;