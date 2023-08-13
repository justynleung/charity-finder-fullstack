import axios from "axios";
interface Param {
    isLiked: Boolean;
    likedCharity: Object;
    API: string
}
const addFavToDb = async ({ isLiked, likedCharity, API }: Param) => {
    try {
        if (!isLiked) {
            const res = await axios.post(`${API}/api/favCharityList`, likedCharity)
            return res
        }
    } catch (err) {
        return err
    }
}

export default addFavToDb;


// const addToDdFavList = async () => {
//     if (!isLiked) {
//         const liked = { name, location, logoUrl }
//         await axios.post(`${API}/api/favCharityList`, liked)
//             .then((response) => console.log(response))
//             .catch((err) => setError(err.response.data.msg))
//     }
//     setIsLiked(true)
// }