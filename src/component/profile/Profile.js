import React from 'react';
import './profile.css';
import putin from '../../images/putin.jpg';
import chopper from '../../images/chopper.png'
function Profile() {
    return(
      <div className='profile'>
        <div className='me'>
          <img src={chopper}></img>
          <p>Chopper with me</p>
        </div>
        <div className='posts'>
          <input placeholder='Введите сообщение' />
          <button>Добавить пост</button>
          <div className='post'>
            <img src={putin}/>
            <span>Господин мира</span>
            <p>-хорошая погода сегодня и завтра</p>
          </div>
        </div>
      </div> 
    );
  }
export default Profile;