import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signup } from '../store/actions/user.actions';

export const SignupPage = () => {

    const [username, setUsername] = useState()
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleChange = ({ target }) => {
        const username = target.value
        setUsername(username)
    }

    const onSignup = (ev) => {
        ev.preventDefault()
        if (!username) return console.log('add your name')
        dispatch(signup(username))
        navigate('/')
    }

    return (
        <form className='signup-page flex column gap15 align-center' onSubmit={onSignup}>
            <label htmlFor="name">Please enter your name:</label>
            {/* <input type="text" value={username} name='username' placeholder='Write your name' onChange={handleChange} /> */}
            <input type="text"  placeholder='Write your name' onChange={handleChange} />
            <button>Sign up</button>
        </form>
    )
}
