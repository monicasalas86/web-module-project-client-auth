import React from 'react';
import axios from 'axios';

import '../App.css';


class Login extends React.Component{
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/login', this.state.credentials)
            .then(res => {
                // console.log(res);
                localStorage.setItem('token', res.data.payload);
                // console.log(this.props);
                this.props.history.push('/friendslist');
            })
            .catch(err => {
                console.log(err);
            })
    };

    render() {
        return(
            <div className='loginForm'>
                <form onSubmit={this.login}>
                    <h2>L O G I N</h2>
                    <input
                        type='text'
                        name='username'
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                        placeholder='username'
                    />
                    <input
                        type='password'
                        name='password'
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                        placeholder='password'
                    />
                    <button className='loginButton'>E N T E R</button>
                </form>
            </div>
        )
    }
}

export default Login;