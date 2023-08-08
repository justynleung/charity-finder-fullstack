import axios from 'axios';

const url = import.meta.env.VITE_API_KEY;

export const getAllData = async () => {
    try {
        const { data } = await axios.get(url!)
        console.log(data.nonprofits)

    } catch (error) {
        console.log('Cannot fetch data from API')
    }
}