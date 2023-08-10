import axios from 'axios';
import { useEffect, useState } from 'react';
import placeholderImg from '../assets/No-Image-Placeholder.svg.png';
import { MdReadMore } from 'react-icons/md';

const apiRoute = "http://localhost:3000";

interface FavCharityData {
    name: string
    location: string
    logoUrl: string
    ein: string
    _id: string
    forceUpdate: Function
    hasUpdated: Boolean
}


export default function FavoriteList() {
    const [allData, setAllData] = useState<FavCharityData[]>([])
    const [hasUpdated, setHasUpdated] = useState<Boolean>(true)
    const getFavList = async () => {
        await axios.get(`${apiRoute}/api/favCharityList`)
            .then((res => {
                let arr = []
                arr = [...res.data.charities]
                setAllData(arr)
            }))
            .catch(err => console.error(`Error: ${err}`))
    }
    useEffect(() => {
        getFavList();
        console.log("refreshed")
    }, [hasUpdated])
    return (
        <div className='flex flex-col'>
            <h2 className='font-bold text-3xl'>{allData.length === 0 ? "No favorite charity" : "List of favorite charities"}</h2>
            <div className='flex flex-wrap justify-center h-fit'>
                <div className='flex flex-row flex-wrap justify-center w-fit max-w-[1500px]'>
                    {allData.map((item) => {
                        return <FavCharity key={item._id} _id={item._id} name={item.name} location={item.location} logoUrl={item.logoUrl} ein={item.ein} forceUpdate={setHasUpdated} hasUpdated={hasUpdated} />
                    })}
                </div>
            </div>
        </div>
    )
}

function FavCharity({ name, location, logoUrl, ein, _id, forceUpdate, hasUpdated }: FavCharityData) {
    const [error, setError] = useState<string | null>(null)
    const deleteFromFavList = async () => {
        await axios.delete(`${apiRoute}/api/favCharityList/${_id}`)
            .then((response) => console.log(response))
            .catch((err) => console.log(err))
    }
    const handleClick = async () => {
        await deleteFromFavList()
        forceUpdate(!hasUpdated)
    }

    return (
        <div className='flex flex-col justify-start items-start text-left w-60 h-80 m-4 p-4 bg-[--color-gold-light] rounded-3xl text-[--color-gray-4]'>
            <img className='w-52 h-36' src={logoUrl ? logoUrl : placeholderImg} alt={`Logo of ${name}`} />
            <div className='flex flex-col h-full w-full justify-between mt-1.5'>
                <div>
                    <p>{name}</p>
                </div>
                <div className='flex flex-col items-center'>
                    {error && <p>{error}</p>}
                    <div className='flex flex-row justify-around items-center w-full'>
                        <button onClick={() => handleClick()} className='text-lg'>placeholder</button>
                        <button className='flex flex-row items-center text-lg'><small>Detail</small><MdReadMore /></button>
                    </div>

                </div>
            </div>
        </div>


    )
}