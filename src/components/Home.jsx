import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
    return (
        <div className='home-container'>
            <div className='home-red-obj'></div>
            <div className='home-purple-obj'></div>
            <div className='home-green-obj'></div>
            <div>
                <Link className='logo'>Sopum</Link>
            </div>
            <ul className='home-links'>
                <Link to='/kitchen' className='home-link'>kitchen</Link>
                <Link to='/stationery' className='home-link'>stationery</Link>
                <Link to='/walldeco' className='home-link'>wall deco</Link>
                <Link to='/lighting' className='home-link'>lighting</Link>
            </ul>
            <div className='home-menu'>
                <a href='/search'><i class="fa-sharp fa-solid fa-magnifying-glass"></i></a>
                <a href='/login'><i class="fa-regular fa-user"></i></a>
            </div>
        </div>
    )
}

export default Home