import React from 'react';
import '../App.css';

const Friend = (props) => {
    return(
        <div className='indFriend'>
            <p>Name: {props.friend.name}</p>
            <p>Age: {props.friend.age}</p>
            <p>Email: {props.friend.email}</p>
        </div>
    )
}

export default Friend;