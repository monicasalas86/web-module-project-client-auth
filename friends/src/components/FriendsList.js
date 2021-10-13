import React, {useState, useEffect} from 'react';
import axios from 'axios';

const FriendsList = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/friends')
            .then((res) => {
                console.log(res);
            })
    })
    return(
        <div>
            <p>friends</p>
        </div>
    )
}

export default FriendsList;