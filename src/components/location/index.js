import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1603.030603149192!2d-6.301574295962119!3d36.52851772503439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0dd1a7bd138875%3A0x5f89d393e94935c3!2sCampo%20del%20Sur!5e0!3m2!1sen!2sus!4v1611104615289!5m2!1sen!2sus"
                width="100%" height="500px" frameBorder="0"
                allowFullScreen title="B R U H">

            </iframe>
            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    );
};

export default Location;



