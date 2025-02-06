import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'

import { SearchBar } from '.'
import { logo } from '../utils/contants'

const Navbar = () => {
    return (
        <Stack 
            direction='row' 
            alignItems='center' 
            p={2} 
            sx={{ position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between' }}
        >
            <Link to='/' className='navbar-link'>
                <img src={logo} alt="logo" height={45} />
            </Link>
            <SearchBar />
        </Stack>
    )
}

export default Navbar