import React from 'react';
import s from './Header.module.css';
import Logo from '../../assets/logo.png';

const Header = () => {
  return (
    <div className={s.header}>
      <div className='container'>
        <div className={s.box}>
          <div className={s.left}>
            <p>Call - 123 456 789</p>
          </div>
          <div>
            <img src={Logo} alt='logo' />
          </div>
          <div className={s.right}>
            <button>Reservation</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
