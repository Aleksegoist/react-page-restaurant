import React from 'react';
import s from './About.module.css';
import Locate from '../../assets/locate.png';
import Clock from '../../assets/clock.png';
import Reserv from '../../assets/reserv.png';
import AboutImg from '../../assets/about_img.png';
import Sub from '../../assets/about_sub.png';

const About = () => {
  return (
    <div className={s.about}>
      <div className='container'>
        <div className={s.box}>
          <div className={s.box_top}>
            <div className={s.item}>
              <div className={s.block}>
                <img src={Locate} alt='img' />
              </div>
              <div className={s.block_title}>
                <h3>Locate Us</h3>
                <p className='subtitle'>Riverside 25, San Diego, California</p>
              </div>
            </div>
            <div className={s.item}>
              <div className={s.block}>
                <img src={Clock} alt='img' />
              </div>
              <div className={s.block_title}>
                <h3>Open Hours</h3>
                <p className='subtitle'>Mon To Fri 9:00 AM - 9:00 PM</p>
              </div>
            </div>
            <div className={s.item}>
              <div className={s.block}>
                <img src={Reserv} alt='img' />
              </div>
              <div className={s.block_title}>
                <h3>Reservation Us</h3>
                <p className='subtitle'>restaurantate@gmail.com</p>
              </div>
            </div>
          </div>
          <div className={s.box_bottom}>
            <div className={s.box_left}>
              <img src={AboutImg} alt='img' />
            </div>
            <div className={s.box_right}>
              <div className={s.main_title}>
                <h1 className='title'>The Delicious Story</h1>
                <p className='subtitle'>
                  The people, food and the prime locations make the perfect
                  place for the friends & family to come together and have great
                  time.
                </p>
              </div>
              <div className={s.center_title}>
                <div>
                  <h1 className='title'>2018</h1>
                  <p className='subtitle'>
                    Plan for this restaurant to deliver healthy food.
                  </p>
                </div>
                <div>
                  <h1 className='title'>2022</h1>
                  <p className='subtitle'>
                    Happily in the fourth year by fulfill the motto.
                  </p>
                </div>
              </div>
              <div className={s.bottom_title}>
                <h4>JOSEFINE</h4>
                <img src={Sub} alt='img' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
