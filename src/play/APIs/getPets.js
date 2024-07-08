import axios from 'axios';

export const getPets = async (fid) => {
    try {
        const response = await axios.get(`https://base-pet-backenc.vercel.app/ito/${fid}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data: ', error);
        return [];
    }
}
