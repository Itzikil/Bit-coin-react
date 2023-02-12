import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom'
import { logout } from '../store/actions/user.actions';


export function AppHeader() {
    const loggedInUser = useSelector(state => state.userModule.loggedInUser)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [mobileMenu, setMobileMenu] = useState(false)

    const openMenu = () => {
        setMobileMenu(!mobileMenu)
    }
    const signout = () => {
        dispatch(logout())
        navigate('/signup')
    }

    return (
        <header className="app-header align-center">
            <section className="container flex space">
                <NavLink to="/" >Home</NavLink>
                <div className={mobileMenu ? 'mobile-menu-container change mobile-menu' : 'mobile-menu-container mobile-menu' } onClick={openMenu}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
                <nav className={mobileMenu ? 'desktop-menu open-menu' : 'desktop-menu close-menu'}>
                    {loggedInUser ?
                        <>
                            <NavLink to="/statistic" >Statistics</NavLink>
                            <NavLink to="/contact" >Contact</NavLink>
                            <p onClick={signout} className="pointer link">Logout</p>
                        </>
                        :
                        <NavLink to="/signup">Signup</NavLink>}
                        <NavLink to="/about">About</NavLink>
                </nav>
            </section>
        </header>
    )
}
