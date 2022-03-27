import React from 'react';
import './profile.css';
import chopper from '../../images/chopper.png';
import Posts from './posts/Posts'
function Profile(props) {
    return(
      <div className='profile'>
        <div className='me'>
          <img src={chopper}></img>
          <p>{props.name}</p>
        </div>
        <Posts/>
        
      </div>
    );
  }

export default Profile;