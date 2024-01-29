import axios from 'axios'

const insteance = axios.create({
    baseURL: 'http://127.0.0.1:3000/',
});

insteance.get('/foo-bar')

export default axios;