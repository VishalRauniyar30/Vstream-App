import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import { fetchFromAPI } from '../utils/fetchFromAPI'
import { Videos } from '.'
import PlaylistProfile from './PlaylistProfile'

const PlaylistDetail = () => {
    const [playlistDetail, setPlaylistDetail] = useState(null)
    const [videos, setVideos] = useState([])

    const { id } = useParams()

    useEffect(() => {
        fetchFromAPI(`playlists?id=${id}&part=snippet`)
        .then((data) => {
            setPlaylistDetail(data?.items[0])
        })

        fetchFromAPI(`playlistItems?playlistId=${id}&part=snippet`)
        .then((data) => {
            setVideos(data?.items)
        })
    }, [id])

    console.log(playlistDetail);
    console.log(videos);
    

    return (
        <Box minHeight='95vh'>
            <Box>
                <div className='channeldetail-div' />
                <PlaylistProfile playlistDetail={playlistDetail} marginTop='-110px' />
            </Box>
            <Box p={2} display='flex'>
                <Box sx={{ mr: { sm: '100px' } }} />
                <Videos videos={videos} />    
            </Box>
        </Box>
    )
}

export default PlaylistDetail