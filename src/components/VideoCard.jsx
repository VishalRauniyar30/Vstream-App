import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { demoChannelTitle, demoChannelUrl, demoThumbnailUrl, demoVideoTitle, demoVideoUrl1, demoVideoUrl2 } from '../utils/contants'

const VideoCard = ({ video }) => {
    const { id: { videoId }, snippet } = video
    return (
        <Card sx={{ width: { xs: '100%', sm:'360px', md: '320px' }, maxWidth: "360px", boxShadow: 'none', borderRadius: 0 }}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl2}>
                <CardMedia 
                    component='img'
                    image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
                    alt={snippet?.title}
                    sx={{ 
                        width: { sx: '100%', sm: '360px', md: '320px' },
                        height: "180px", 
                        objectFit: "cover" // Ensures it crops instead of stretching
                    }} 
                />
            </Link>
            <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }}>
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl1 }>
                    <Typography variant='subtitle1' fontWeight='bold' color='#fff'>
                        {snippet?.title?.slice(0,60) || demoVideoTitle.slice(0,60)}
                    </Typography>
                </Link>
                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                    <Typography variant='subtitle2' color='gray'>
                        {snippet?.channelTitle || demoChannelTitle}
                        <CheckCircle sx={{ fontSize: '12px',  color: 'gray', ml: '5px' }} />
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    )
}

export default VideoCard