import axios from 'axios';

const request = axios.create({
    baseURL: 'http://ddragon.leagueoflegends.com/cdn/13.16.1/data/en_US/',
});

export const get = async (path, options = {}) => {
    const response = await request.get(path, options);
    return response.data;
};

export default request;
