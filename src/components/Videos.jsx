import React from 'react'
import { Box, Stack } from '@mui/material'

import { ChannelCard, Loader, PlaylistCard, VideoCard } from '.'

const Videos = ({ direction, videos }) => {
    if(!videos?.length){
        return <Loader />
    }

    return (
        <Stack direction={direction || 'row'} flexWrap='wrap' justifyContent='start' alignItems='start' gap={2}>
            {videos?.map((video, index) => (
                <Box key={index}>
                    {(video?.id?.videoId) && (
                        <VideoCard video={video} />
                    )}
                    {(video?.id) && (
                        <VideoCard video={video} />
                    )}
                    {video?.id?.channelId && (
                        <ChannelCard channelDetail={video} />
                    )}
                    {video?.id?.playlistId && (
                        <PlaylistCard playlistDetail={video} />
                    )}
                </Box>
            ))}
        </Stack>
    )
}

export default Videos