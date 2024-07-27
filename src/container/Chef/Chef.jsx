import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt='chef img'/> 
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title='Chef’s Word' />
      <h1 className='headtext__cormorant'>What we believe in</h1>  
      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt='quote' />
          <p className='p__opensans'>Cooking is my passion, and Gericht is my canvas.</p>
        </div>
        <p className='p__opensans'>I believe in crafting dishes that not only satisfy your hunger but also tell a story. Our team uses the freshest ingredients and combines them with creativity and love to create unforgettable dining experiences. Come, be a part of our journey and let us share our story with you, one dish at a time.</p>
      </div>
      <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt='sign'/>
      </div>
    </div>
  </div>
);

export default Chef;
