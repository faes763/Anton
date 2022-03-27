import React from 'react';
import './friends.css';
import Friend from './friend/Friend'
function Friends() {
    return(
        <div className='friends'>
            <h3>Друзья</h3>
            <Friend friend="Мама"/>
            <Friend friend="Путин"/>
            <Friend friend="Андрей"/>
            <Friend friend="Воробей"/>
            <Friend friend="Не"/>
            <Friend friend="Гоняй"/>
            <Friend friend="Голубей"/>
            <Friend friend="Олег"/>
        </div>
    )
}

export default Friends;