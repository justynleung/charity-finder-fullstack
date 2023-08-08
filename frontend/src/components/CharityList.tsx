import axios from 'axios';
import { useEffect, useState } from 'react';
import placeholderImg from '../assets/No-Image-Placeholder.svg.png';
import { BiLike, BiSolidLike } from 'react-icons/bi'
import { MdReadMore } from 'react-icons/md';

const url = import.meta.env.VITE_API_KEY;

interface CharityData {
    name: string
    location: string
    logoUrl: string
}


export default function CharityList() {
    const [allData, setAllData] = useState<CharityData[]>([])
    const getAllData = async () => {
        console.log(allData)
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
        <div className='flex flex-wrap justify-start h-fit'>
            {allData.map((item) => {
                return <Charity name={item.name} location={item.location} logoUrl={item.logoUrl} />
            })}
        </div>
    )
}

function Charity({ name, location, logoUrl }: CharityData) {
    const [isLiked, setIsLiked] = useState(false);
    return (
        <div className='flex flex-col justify-start items-start text-left w-60 h-80 m-4 p-4 bg-[--color-gold-light] rounded-3xl text-[--color-gray-4]'>
            <img className='w-52 h-36' src={logoUrl ? logoUrl : placeholderImg} alt={`Logo of ${name}`} />
            <div className='flex flex-col h-full w-full justify-between mt-1.5'>
                <div>
                    <p>{name}</p>
                    <p>{location}</p>
                </div>
                <div className='flex flex-row justify-around items-center w-full'>
                    <button onClick={() => setIsLiked(!isLiked)} className='text-lg'>{isLiked ? <BiSolidLike /> : <BiLike />}</button>
                    <button className='flex flex-row items-center text-lg'><small>Detail</small><MdReadMore /></button>
                </div>
            </div>
        </div>


    )
}