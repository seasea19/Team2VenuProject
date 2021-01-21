/* import { grey } from '@material-ui/core/colors'; */
import '../../index.css';
import React from 'react';
import Fade from 'react-reveal/Fade';
import { Tooltip } from '@material-ui/core';

const Footer = () => {
    return (
        <footer className = "bck_grey">
            <Fade delay={500}>
                <div className="font_righteous footer_logo_venue">
                    <Tooltip title="Check out our Github!">
                
                    
                    <a href = "https://github.com/SimronJ/Team2VenuProject"
                    style ={{
                        color: "#FFF"
                        
                        }}
                    >BootCamp Countdown
                    </a>
                </Tooltip>
                </div>
                <br></br>
                <div className="footer_copyright">JJAY TTP, Team 2. All rights reserved ©</div>
                <div className="footer_copyright">
                    <ul style ={{listStyleType: "none"}}>
                        <li>Cenk Cafer</li>
                        <li>Olviia-Nikol Andriievska</li>
                        <li>Shirley Ni</li>
                        <li>Jason Orr</li>
                        <li>Jayzy Padilla</li>
                        <li>Simranjeet Singh</li>

                    </ul>
                </div>
            </Fade>
        </footer>
    );
};

export default Footer;