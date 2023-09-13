import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return(
        <div className='navbar-container'>
            <ul className='navbar-menu'>
                <Link to="/" className='navbar-menu-link'>cart</Link>
                <Link to="/login" className='navbar-menu-link'>login</Link>
                <Link to="/mypage" className='navbar-menu-link'>mypage</Link>
            </ul>

            <div className='greybox'></div>

            <Link className='navbar-logo'>Sopum</Link>
            
            <ul className='navbar-links'>
                <Link to='/kitchen' className='navbar-link'>kitchen</Link>
                <Link to='/stationery' className='navbar-link'>stationery</Link>
                <Link to='/walldeco' className='navbar-link'>wall deco</Link>
                <Link to='/lighting' className='navbar-link'>lighting</Link>
            </ul>
        </div>
    )
}

export default Navbar