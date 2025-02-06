import axios from "axios"

export const BASE_URL = import.meta.env.VITE_YOUTUBE_BASE_URL1

const options = {
    params: {
        maxResults: '50'
    },
    headers: {
        'x-rapidapi-key': import.meta.env.VITE_YOUTUBE_V3_KEY,
        'x-rapidapi-host': import.meta.env.VITE_YOUTUBE_BASE_URL2
    }
}

export const fetchFromAPI = async(url) =>{
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)
    
    return data
}