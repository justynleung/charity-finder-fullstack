import axios from "axios";

const getFavList = async (API: string) => {
    try {
        const { data } = await axios.get(`${API}/api/favCharityList`)
        var res = data.charities
        return res
    } catch (error) {
        console.log("cannot fetch fav charities from database")
        return []
    }
}

export default getFavList;

 // const getFavList = async () => {
    //     await axios.get(`${API}/api/favCharityList`)
    //         .then((res => {
    //             let arr = []
    //             arr = [...res.data.charities]
    //             setAllData(arr)
    //             return arr
    //         }))
    //         .catch(err => console.error(`Error: ${err}`))
    // }