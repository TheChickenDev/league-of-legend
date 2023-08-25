import * as request from '../utils/request';

export const championInfo = async (champName) => {
    try {
        const response = await request.get(`champion/${champName}.json`, {});
        return response.data[champName];
    } catch (error) {
        console.log(error);
    }
};

export const search = async () => {
    try {
        const response = await request.get('champion.json', {});
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
