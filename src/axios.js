import axios from 'axios'

const insteance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
});
console.log(insteance);
//insteance.get('/movie')

export default axios;