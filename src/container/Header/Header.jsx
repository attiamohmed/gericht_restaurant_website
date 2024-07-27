import React from 'react';
import { images}  from '../../constants';
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new Flavour" />
      <h1 className='app__header-h1'>The key to Fine dining</h1>
      <p className='p__opensans' style={{margin: '2rem 0'}}> Welcome to Gericht, where our passion for cooking shines in every dish. Our chefs pour their heart and soul into creating meals that tell a story. Using only the finest ingredients, we aim to delight your taste buds and warm your heart. Join us for a dining experience that's personal, memorable, and crafted just for you. </p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt='header img' />
    </div>
  </div>
);

export default Header;
