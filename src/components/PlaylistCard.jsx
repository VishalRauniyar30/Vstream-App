import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { demoChannelTitle, demoChannelUrl, demoThumbnailUrl, demoVideoTitle, demoVideoUrl1, demoVideoUrl2 } from '../utils/contants'

const PlaylistCard = ({ playlistDetail, marginTop }) => {
    const { id: { playlistId }, snippet } = playlistDetail
    return (
        <Card sx={{ width: { xs: '100%',sm:'360px', md: '320px' }, maxWidth: "360px", boxShadow: 'none', borderRadius: 0, marginTop }}>
            <Link to={playlistId ? `/playlist/${playlistId}` : demoVideoUrl2}>
                <CardMedia 
                    image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
                    alt={snippet?.title}
                    sx={{ 
                        width: "100%",  // Ensures it takes up full width of Card
                        maxWidth: "100%", // Prevents it from overflowing
                        height: "180px", 
                        objectFit: "cover" // Ensures it crops instead of stretching
                    }} 
                />
            </Link>
            <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }}>
                <Link to={playlistId ? `/playlist/${playlistId}` : demoVideoUrl1 }>
                    <Typography variant='subtitle1' fontWeight='bold' color='#fff'>
                        {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
                    </Typography>
                </Link>
                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                    <Typography variant='subtitle2' color='gray'>
                        {snippet?.channelTitle || demoChannelTitle}
                        <CheckCircle sx={{ fontSize: '12px',  color: 'gray', ml: '5px' }} />
                    </Typography>
                    <Typography variant='subtitle2' color='gray'>
                        Playlist
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    )
}

export default PlaylistCard