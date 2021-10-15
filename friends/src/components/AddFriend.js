import React, {useState} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import '../App.css';

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
        <div className='addContainer'>
            <form onSubmit={friendSubmit} className='addForm'>
                <h2>ADD A FRIEND</h2>
                <div className='addFormInputs'>
                    <input
                        type='text'
                        name='name'
                        value={newFriend.name}
                        onChange={handleChange}
                        className='addFriendLabel'
                        placeholder='name'
                    />
                    <input
                        type='text'
                        name='age'
                        value={newFriend.age}
                        onChange={handleChange}
                        className='addFriendLabel'
                        placeholder='age'
                    />
                    <input
                        type='email'
                        name='email'
                        value={newFriend.email}
                        onChange={handleChange}
                        className='addFriendLabel'
                        placeholder='email'
                    />
                </div>
                <button className='addButton'>ADD FRIEND</button>
            </form>
        </div>
    )
}

export default AddFriend;