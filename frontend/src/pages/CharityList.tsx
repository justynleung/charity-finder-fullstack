import axios from 'axios';
import { useEffect, useState } from 'react';
import placeholderImg from '../assets/No-Image-Placeholder.svg.png';
import { BiLike, BiSolidLike } from 'react-icons/bi'
import { MdReadMore } from 'react-icons/md';


const url = import.meta.env.VITE_API_KEY;
const apiRoute = "http://localhost:3000";

interface CharityData {
    name: string
    location: string
    logoUrl: string
    ein: string
}


export default function CharityList() {
    const [allData, setAllData] = useState<CharityData[]>([])
    const getAllData = async () => {
        await axios.get(url!)
            .then((res => {
                setAllData(res.data.nonprofits)
            }))
            .catch(err => console.error(`Error: ${err}`))
    }
    useEffect(() => {
        getAllData();
    }, [])
    return (
        <div className='flex flex-wrap justify-center h-fit'>
            <div className='flex flex-row flex-wrap justify-center w-fit max-w-[1500px]'>
                {allData.map((item) => {
                    return <Charity key={item.ein} name={item.name} location={item.location} logoUrl={item.logoUrl} ein={item.ein} />
                })}
            </div>
        </div>
    )
}

function Charity({ name, location, logoUrl, ein }: CharityData) {
    const [isLiked, setIsLiked] = useState<Boolean>(false);
    const [error, setError] = useState(null)
    const addToDdFavList = async () => {
        if (!isLiked) {
            const liked = { name, location, logoUrl, ein }
            await axios.post(`${apiRoute}/api/favCharityList`, liked)
                .then((response) => console.log(response))
                .catch((err) => setError(err.response.data.msg))
        }
        setIsLiked(!isLiked)
    }
    const handleClick = () => {
        addToDdFavList()
        if (error !== null) {
            setIsLiked(true)
        }
    }
    return (
        <div className='flex flex-col justify-start items-start text-left w-60 h-80 m-4 p-4 bg-[--color-gold-light] rounded-3xl text-[--color-gray-4]'>
            <img className='w-52 h-36' src={logoUrl ? logoUrl : placeholderImg} alt={`Logo of ${name}`} />
            <div className='flex flex-col h-full w-full justify-between mt-1.5'>
                <div>
                    <p>{name}</p>
                    {/* <p>{location}</p> */}
                </div>
                <div className='flex flex-col items-center'>
                    {error && <p>{error}</p>}
                    <div className='flex flex-row justify-around items-center w-full'>
                        <button onClick={() => handleClick()} className='text-lg'>{isLiked ? <BiSolidLike /> : <BiLike />}</button>
                        <button className='flex flex-row items-center text-lg'><small>Detail</small><MdReadMore /></button>
                    </div>

                </div>
            </div>
        </div>


    )
}