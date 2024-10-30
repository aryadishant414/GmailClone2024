import axios from 'axios';

const API_URL = process.env.REACT_APP_BACKEND_API_URL;

const API_GMAIL = async (urlObject, payload) => {
    return await axios({
        method: urlObject.method,
        url: `${API_URL}/${urlObject.endpoint}`,
        data: payload
    })
};

export default API_GMAIL;