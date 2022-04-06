import React from 'react';
import '../App.css';
import { Button } from './Button';
import './DrinkSection.css';

function DrinkSection() {
  return (
    <div className='Drink-container'>
      <video src='/videos/video-section.mp4' autoPlay loop muted />
      <h1>CHÀO MỪNG ĐẾN VỚI BLOG</h1>
      <p>Bạn muốn tìm kiếm điều gì?</p>
      <div className='drink-btns'>
      <button type="button" class="btn btn-outline-info"
       buttonSize='btn--large'
      
      >Bắt đầu
      </button>
      <a href="https://www.youtube.com/watch?v=qH4Cge_ED-4">
         <button type="button" class=" btn btn-outline-info"
         buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          XEM FULL VIDEO <i className='far fa-play-circle' />
          </button>
          </a>
      </div>
    </div>
  );
}

export default DrinkSection;