import React, {useState, useEffect} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import AddFriend from './AddFriend';

const FriendsList = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get('http://localhost:5000/api/friends')
            .then((res) => {
                setFriends(res);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return(
        <div>
            <p>friends</p>
            <AddFriend/>
        </div>
    )
}

export default FriendsList;