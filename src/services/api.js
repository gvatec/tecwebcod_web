import axios from 'axios'

const api = axios.create({
    baseURL: "https://api-tecwebcod-production.up.railway.app/",
    headers: {
        Authorization: 'Access-Control-Allow-Origin'

    }
})
export default api;