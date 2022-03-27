import React from "react";
import './messages.css';
import Mess from './message/Mess';
import Friends from '..//friends/Friends'

function Messages() {
    return(
        <div className="messages">
            <Mess/> 
            <Friends/>
        </div>
    )
}


export default Messages;