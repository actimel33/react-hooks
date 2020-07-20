import React   from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = (props) => {

    return (
        <nav className='navbar navbar-dark bg-primary navbar-expand-lg'>
            <div className='navbar-brand'>
                Github-search!
            </div>
            <ul className='navbar-nav flex-row'>
                <li className='nav-item'>
                    <NavLink exact to="/" className='nav-link mr-3'>Main</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to="/about" className='nav-link mr-3'>Info</NavLink>
                </li>
            </ul>

        </nav>
    );
};

export default Navbar;
