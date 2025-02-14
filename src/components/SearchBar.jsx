import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IconButton, Paper } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'


const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('')

    const navigate = useNavigate()

    const onHandleSubmit = (e) => {
        e.preventDefault()
        if(searchTerm){
            navigate(`/search/${searchTerm}`)

            setSearchTerm('')
        }
    }
    return (
        <Paper
            component='form'
            onSubmit={onHandleSubmit}
            sx={{ borderRadius: 20, border: '1px solid #e3e3e3', pl:3, boxShadow: 'none', mr:{ sm: 5 } }}
        >
            <input 
                className='search-bar'
                placeholder='Search..'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <IconButton type='submit' sx={{ p: '10px', color: 'red', pr:'15px' }} aria-label='search'>
                <SearchIcon />
            </IconButton>
        </Paper>
    )
}

export default SearchBar