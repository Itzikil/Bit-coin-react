import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom'
import { logout } from '../store/actions/user.actions';


export function AppHeader() {
    const loggedInUser = useSelector(state => state.userModule.loggedInUser)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const signout = () => {
        dispatch(logout())
        navigate('/signup')
    }

    return (
        <header className="app-header align-center">
            <section className="container flex space">
                <NavLink to="/" >Home</NavLink>

                <nav className='flex gap15'>
                    {loggedInUser ?
                        <p onClick={signout} className="pointer link">Logout</p> :
                        <NavLink to="/signup">Signup</NavLink>}
                    <NavLink to="/statistic" >Statistics</NavLink>
                    <NavLink to="/contact" >Contact</NavLink>
                </nav>
            </section>
        </header>
    )
}
