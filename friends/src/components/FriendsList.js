import React, {useState, useEffect} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';


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
        </div>
    )
}

export default FriendsList;