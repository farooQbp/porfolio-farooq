import React from 'react';
import { FaGithub, FaFacebookF, FaLinkedinIn, FaGooglePlay, FaSkype, FaWhatsapp } from 'react-icons/fa';

const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a href='https://github.com/farooQbp' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>

            <a href='https://wa.me/918891868619' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaWhatsapp />
            </a>

            <a href='https://join.skype.com/invite/Xgj1eKO91E9H' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaSkype  />
            </a>

            <a href='https://www.linkedin.com/in/farooqbasheerp' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>

            <a href='https://wwww.facebook.com/farooqbasheerp' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaFacebookF />
            </a>

            <a href='https://play.google.com/store/apps/dev?id=5264037951108124085' className='home__social-link' target='__blank' rel='noreferrer'>
                <FaGooglePlay />
            </a>
        </div>
    );
};

export default HeaderSocials;
