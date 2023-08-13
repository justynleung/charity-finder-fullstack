import axios from "axios";
interface Param {
    filter: string;
    API_KEY: string
}
const getDataFromEveryOrg = async ({ filter, API_KEY }: Param) => {
    try {
        const { data } = await axios.get(`https://partners.every.org/v0.2/search/${filter}?apiKey=${API_KEY}`)
        var res = data.nonprofits
        return res
    } catch (error) {
        console.log('Cannot get data from EveryOrg API')
        console.log(error)
    }
}

export default getDataFromEveryOrg

// const getAllData = async () => {
//     await axios.get(`https://partners.every.org/v0.2/search/${filter}?apiKey=${API_KEY}`)
//         .then((res => {
//             setAllData(res.data.nonprofits)
//         }))
//         .catch(err => console.error(`Error: ${err}`))
// }