import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Box, Stack, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import ReactPlayer from 'react-player'
import millify from 'millify'

import { fetchFromAPI } from '../utils/fetchFromAPI'
import { Loader, Videos } from '.'
import moment from 'moment'

const VideoDetail = () => {
    const [videos, setVideos] = useState([])
    const [videoDetail, setVideoDetail] = useState(null)

    const { id } = useParams()

    useEffect(() => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
        .then((data) => setVideoDetail(data.items[0]))

        fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
        .then((data) => setVideos(data.items))
    }, [id])

    console.log(videos);
    console.log(videoDetail);
    

    if(!videoDetail?.snippet) {
        return <Loader />
    }

    const { snippet, statistics } = videoDetail

    return (
        <Box minHeight='95vh'>
            <Stack direction={{ xs: 'column', md: 'row' }}>
                <Box flex={1}>
                    <Box sx={{ width: '100%', position: 'sticky', top: '86px' }} overflow='auto'>
                        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
                        <Typography color='#fff' variant='h5' fontWeight='bold' p={2}>
                            {snippet?.title}
                        </Typography>
                        <Stack direction='row' justifyContent='space-between' py={1} px={2} sx={{ color: '#fff' }}>
                            <Link to={`/channel/${snippet?.channelId}`}>
                                <Typography color='#fff' variant='h6'>
                                    {snippet?.channelTitle}
                                    <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
                                </Typography>
                            </Link>
                            <Stack direction='row' gap='20px' alignItems='center'>
                                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                                    {millify(statistics?.viewCount)} Views
                                </Typography>
                                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                                    {millify(statistics?.likeCount)} Likes
                                </Typography>
                            </Stack>
                        </Stack>
                        <Stack py={1} px={2} sx={{ color: '#fff' }} direction='row'>
                            <Typography variant='body1' sx={{ opacity: 0.7 }}>
                                {moment(snippet?.publishedAt).format("MMMM Do YYYY, h:mm A")}
                            </Typography>
                        </Stack>
                    </Box>
                </Box>
                <Box px={2} py={{ md: 1, xs: 5 }} justifyContent='center' alignItems='center'>
                    <Videos videos={videos} direction='column' />
                </Box>
            </Stack>
        </Box>
    )
}

export default VideoDetail