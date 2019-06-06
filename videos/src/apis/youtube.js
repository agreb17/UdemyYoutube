import axios from 'axios';


const KEY = 'AIzaSyC2A-Rb0ifpgObsL3iqc9SbzAkgt_k0Al0'


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube.v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,

    }
});