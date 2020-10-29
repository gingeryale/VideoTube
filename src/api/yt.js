import axios from 'axios';

const KEY = 'AIzaSyATeUGRc4QzYNvc4vavK7fYcDxe-H27CzI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});
