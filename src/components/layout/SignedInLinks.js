import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/creatememe'>Post Meme</NavLink></li>
            <li><NavLink to='/'>Log Out</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>YB</NavLink></li>

        </ul>
    )
}

export default SignedInLinks;