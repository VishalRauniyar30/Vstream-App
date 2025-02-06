import React from 'react'
import { Box } from '@mui/material'
import { Route, Routes } from 'react-router-dom'

import { ChannelDetail, Feed, Navbar, PlaylistDetail, SearchFeed, VideoDetail } from './components'

function App() {
    return (
        <Box sx={{ backgroundColor: '#000', color: 'white' }}>
            <Navbar />
            <Routes>
                <Route path='/' element={<Feed />} />
                <Route path='/video/:id' element={<VideoDetail />} />
                <Route path='/channel/:id' element={<ChannelDetail />} />
                <Route path='/playlist/:id' element={<PlaylistDetail />} />
                <Route path='/search/:searchTerm' element={<SearchFeed />} />
            </Routes>
        </Box>
    )
}

export default App
