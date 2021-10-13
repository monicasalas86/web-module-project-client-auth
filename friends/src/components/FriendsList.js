import React, {useState, useEffect} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import AddFriend from './AddFriend';
import Friend from './Friend';

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
        <div>
            <div>
                <AddFriend setFriends={setFriends}/>
            </div>
            <div>
                {friends.map((friend) => (
                    <Friend key={friend.id} friend={friend}/>
                ))}
            </div>
        </div>
    )
}

export default FriendsList;