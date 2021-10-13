import React, {useState} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const AddFriend = (props) => {
    const [newFriend, setNewFriend] = useState({
        id: '',
        name: '',
        age: '',
        email: ''
    });

    const handleChange = e => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        });
    };

    const friendSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/friends', newFriend)
            .then(res => {
                console.log(res.data);
            })
    }

    return(
        <div>
            <form onSubmit={friendSubmit}>
                <label>Name:
                    <input
                        type='text'
                        name='name'
                        value={newFriend.name}
                        onChange={handleChange}
                    />
                </label>
                <label>Age:
                    <input
                        type='text'
                        name='age'
                        value={newFriend.age}
                        onChange={handleChange}
                    />
                </label>
                <label>Email:
                    <input
                        type='email'
                        name='email'
                        value={newFriend.email}
                        onChange={handleChange}
                    />
                </label>
                <button>Add Friend</button>
            </form>
        </div>
    )
}

export default AddFriend;