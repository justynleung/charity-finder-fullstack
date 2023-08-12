import axios from "axios";
import { Dispatch, SetStateAction } from "react";

interface AxiosArg {
    API: string
    _id: string
}

interface FavCharityData {
    name: string
    location: string
    logoUrl: string
    ein: string
    _id: string
}


const getFavList = async ({ API }: AxiosArg) => {
    try {
        const { data } = await axios.get(`${API}/api/favCharityList`)
        return data.charities as FavCharityData[]
    } catch (error) {
        return [] as FavCharityData[]
    }
}

const deleteFromFavList = async ({ API, _id }: AxiosArg) => {
    try {
        await axios.delete(`${API}/api/favCharityList/${_id}`)
    } catch (error) {
        return error
    }

    // await axios.delete(`${API}/api/favCharityList/${_id}`)
    //     .then((response) => console.log(response))
    //     .catch((err) => console.log(err))
}

export { deleteFromFavList, getFavList }