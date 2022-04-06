import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            JUST DRINKS
            <i class='fas fa-cocktail' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                TRANG CHỦ
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/douong'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                ĐỒ UỐNG
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/phache'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                PHA CHẾ
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                ĐĂNG NHẬP
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn-outline'>ĐĂNG NHẬP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;