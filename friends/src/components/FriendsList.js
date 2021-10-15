import React, {useState, useEffect} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import AddFriend from './AddFriend';
import Friend from './Friend';
import '../App.css';

const FriendsList = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get('/friends')
            .then((res) => {
                setFriends(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return(
        <div className='friendslistContainer'>
            <div className='addFriend'>
                <AddFriend setFriends={setFriends}/>
            </div>
            <div className='friendsList'>
                {friends.map((friend) => (
                    <Friend key={friend.id} friend={friend}/>
                ))}
            </div>
        </div>
    )
}

export default FriendsList;