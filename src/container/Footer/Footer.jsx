
import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id='login'>
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'> Contact Us</h1>
        <p className='p__opensans'>123 Ocean Avenue, Santa Monica, CA 90401, US</p>
        <p className='p__opensans'>+1 310-555-7890</p>
        <p className='p__opensans'>+1 310-555-6789</p>
      </div>
      <div className='app__footer-links_logo'>
        <img src={images.gericht} alt='footer_logo' />
        <p className='p__opensans'>"The best way to find yourself is to lose yourself in the service of others.”</p>
        <img src={images.spoon} alt='spoon' className='spoon__img' style={{marginTop: 15 }} />
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className='app__footer-links_work'>
      < h1 className='app__footer-headtext'> Working Hours </h1>
        <p className='p__opensans'>Monday-Friday:</p>
        <p className='p__opensans'>10:00 Am - 01:00 Am</p>
        <p className='p__opensans'>Saturday-Sunday:</p>
        <p className='p__opensans'>10:00 Am - 03:00 Am</p>
      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2024 Gerícht. All Rights reserved. Mohamed Attia.</p>
    </div>
  </div>
);

export default Footer;
