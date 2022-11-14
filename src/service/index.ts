import axios from 'axios';
import { API_URL } from '../const';

function post(path: string, data: any, config?: any) {

    return axios.post(API_URL + path, data, config);
}

export default { post };