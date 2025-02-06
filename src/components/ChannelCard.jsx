import React from 'react'
import { Link } from 'react-router-dom'
import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import millify from 'millify'

import { demoProfilePicture } from '../utils/contants'

const ChannelCard = ({ channelDetail, marginTop }) => {
    const channelId1 = channelDetail?.id?.channelId
    const channelId2 = channelDetail?.id
    console.log(channelDetail);
    
    return (
        <Box
            sx={{
                boxShadow: 'none',
                borderRadius: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: { xs: '360px', md: '320px' },
                height: '326px',
                margin: 'auto',
                marginTop
            }}
        >
            <Link to={`/channel/${channelId1 || channelId2}`}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', alignItems: 'center',  color: '#fff' }}>
                    <CardMedia
                        component='img'
                        image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                        alt={channelDetail?.snippet?.title}
                        sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3', objectFit: 'contain' }}
                    />
                    <Typography variant='h6' mt={2}>
                        {channelDetail?.snippet?.title}{' '}
                        <CheckCircle sx={{ fontSize: '14px', color: 'gray', ml: '5px' }} />
                    </Typography>
                    {channelDetail?.statistics?.subscriberCount && (
                        <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
                            {millify(channelDetail?.statistics?.subscriberCount)} Subscribers
                            {/* {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers */}
                        </Typography>
                    )}
                </CardContent>
            </Link>
        </Box>
    )
}

export default ChannelCard