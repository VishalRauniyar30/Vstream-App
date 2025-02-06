import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import { ChannelCard, Videos } from '.'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const ChannelDetail = () => {
    const [channelDetail, setChannelDetail] = useState(null)
    const [videos, setVideos] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetchFromAPI(`channels?part=snippet&id=${id}`)
        .then((data) => {
            setChannelDetail(data?.items[0])
        })

        fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`)
        .then((data) => {
            setVideos(data?.items)
        })
    }, [id])

    return (
        <Box minHeight='95vh'>
            <Box>
                <div className='channeldetail-div' />
                <ChannelCard channelDetail={channelDetail} marginTop='-110px' />
            </Box>
            <Box p={2} display='flex'>
                <Box sx={{ mr: { sm: '100px' } }} />
                <Videos videos={videos} />    
            </Box>
        </Box>
    )
}

export default ChannelDetail