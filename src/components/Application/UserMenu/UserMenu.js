import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAuthentication } from 'redux/authentication/authenticationSlice';
import { logout } from 'redux/authentication/authenticationOperation';
import { NavLink, useNavigate } from 'react-router-dom';
import style from './UserMenu.module.css'

export const UserMenu = () => {
    const { user, isLoggedIn } = useSelector(getAuthentication);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onLogoutClick = () => {
        dispatch(logout())
        navigate('/login')
    }

    const getClassName = ({ isActive }) => {
        return isActive ? `${style.link} ${style.active}` : style.link;
    }
    return (
        <nav>
            {isLoggedIn && <NavLink to='/contacts'>Contacts</NavLink>}
            {isLoggedIn ?
                <div>
                    <p>{`Welcome, ${user.name}!`}</p>
                    <button type='button' onClick={onLogoutClick}>Log Out</button>
                </div> :
                <div>
                    <NavLink className={getClassName} to='/register'>Register</NavLink>
                    <NavLink className={getClassName} to='/login'>Login</NavLink>
                </div>
            }
        </nav>
    )
};