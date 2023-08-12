import axios from "axios";
import { Dispatch, SetStateAction } from "react";
interface AxiosArg {
    API: string
    _id: string
    setAllData: Dispatch<SetStateAction<[]>>
}

const getFavList = async ({ API, setAllData }: AxiosArg) => {
    await axios.get(`${API}/api/favCharityList`)
        .then((res => {
            let arr = []
            arr = [...res.data.charities]
            // setAllData(arr)
        }))
        .catch(err => console.error(`Error: ${err}`))
}

const deleteFromFavList = async ({ API, _id }: AxiosArg) => {
    await axios.delete(`${API}/api/favCharityList/${_id}`)
        .then((response) => console.log(response))
        .catch((err) => console.log(err))
}

export { deleteFromFavList, getFavList }