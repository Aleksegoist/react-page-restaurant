import React from 'react';
import s from './Hero.module.css';
import HeroImg from '../../assets/hero_bg.png';

const Hero = () => {
  return (
    <div className={s.hero}>
      <div className='container'>
        <div className={s.box}>
          <div className={s.left}>
            <h1 className={s.title}>Welcome to Restaurant</h1>
            <p className={s.subtitle}>
              The people, food and the prime locations make the perfect place
              good friends & family to come together and have great time.
            </p>
            <button className='btn'>View Menu</button>
          </div>
          <div className={s.right}>
            <img src={HeroImg} alt='hero img' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
