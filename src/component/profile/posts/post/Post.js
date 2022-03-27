import React from "react";
import putin from '../../../../images/putin.jpg';

function Post(props) {
    return (
        <div className='post'>
            <img src={putin}/>
            <span>{props.name}</span>
            <p>{props.message}</p>
        </div>
    )
}
export default Post;