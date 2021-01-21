import { grey } from '@material-ui/core/colors';
import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer style = {{backgroundColor:'grey'}}>
            <Fade delay={500}>
                <div className="font_righteous footer_logo_venue">BootCamp Countdown</div>
                <div className="footer_copyright">JJAY TTP, Team 2. All rights reserved &copy</div>
                <div className="footer_copyright">Cenk Cafer, Olviia-Nikol Andriievska, Shirley Ni, Jason Orr, Jayzy Padilla, and Simranjeet Singh</div>
            </Fade>
        </footer>
    );
};

export default Footer;