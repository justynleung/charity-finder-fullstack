import axios from "axios";

interface DDeleteFromFavList {
    API: string;
    _id?: string;
}
const deleteFromFavList = async ({ API, _id }: DDeleteFromFavList) => {
    try {
        await axios.delete(`${API}/api/favCharityList/${_id}`)
    } catch (error) {
        console.log(error)
    }
}

export default deleteFromFavList;


// await axios.delete(`${API}/api/favCharityList/${_id}`)
//     .then((response) => console.log(response))
//     .catch((err) => console.log(err))
