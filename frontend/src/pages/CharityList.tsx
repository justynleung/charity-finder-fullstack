import axios from 'axios';
import { Dispatch, SetStateAction, useEffect, useState, useMemo } from 'react';
import { NavLink } from "react-router-dom";

// Services
import { getDataFromEveryOrg, addFavToDb } from '../services';

// Components
import SearchBar from '../components/SearchBar';
import Card from '../components/Card';

// Asset
import { BiLike, BiSolidLike, TiTickOutline, TiTick, MdReadMore } from "../assets/react-icons";

// Style
import { buttonPrimary } from '../assets/stylingTailwind';
import SelectMultiple from '../components/SelectMultiple';

const API_KEY = import.meta.env.VITE_API_KEY;
// const API = import.meta.env.VITE_API || "http://localhost:3000";
const API = "http://localhost:3000";

interface CharityData {
    name: string
    location: string
    logoUrl: string
    ein: string
    setError: Dispatch<SetStateAction<string | null>>
    selectMode: Boolean
}


export default function CharityList() {
    const [error, setError] = useState<string | null>(null)
    const [selectMode, setSelectMode] = useState<Boolean>(false);
    const [allData, setAllData] = useState<CharityData[]>([])
    const [filter, setFilter] = useState<string>('a')

    useMemo(() => {
        const timer = setTimeout(() => {
            setError(null)
        }, 2000);
        return () => clearTimeout(timer);
    }, [error])

    const addSelected = () => {
        console.log('first')
    }

    useEffect(() => {
        getDataFromEveryOrg({ filter, API_KEY })
            .then((res) => {
                setAllData(res)
            })

    }, [filter])
    const errorClassName = 'fixed top-[17%] flex justify-center items-center w-96 h-12 bg-red-300 border-red-500 border-2 rounded text-red-700 font-bold z-20'
    return (
        <div className='relative flex flex-col justify-center items-center h-fit text-[--color-text] w-screen'>
            {error && <div className={`${errorClassName} alert-animation`}>{error}</div>}
            <div className="flex flex-row justify-center items-center mt-32 max-w-[60vw]">
                <SelectMultiple setSelectMode={setSelectMode} selectMode={selectMode} />
                <SearchBar setFilter={setFilter} />
                <NavLink to="/fav" className="w-60">
                    My Favorite List
                </NavLink>
            </div>
            <div className={`${selectMode ? '' : 'invisible'} mt-6`}>
                <button className={`${buttonPrimary} mr-4`} onClick={addSelected}>Add Selected</button>
                <button className={buttonPrimary} onClick={() => setSelectMode(false)}>Exit</button>
            </div>
            {!filter && <h3 className='font-bold text-2xl text-[--color-gold]'>Enter something to serach for charities!!!</h3>}
            <div className='flex flex-row flex-wrap justify-center w-fit max-w-[1500px]'>
                {allData.map((item) => {
                    return <Charity key={item.name} name={item.name} location={item.location} logoUrl={item.logoUrl} ein={item.ein} setError={setError} selectMode={selectMode} />
                })}
            </div>
        </div>
    )
}

function Charity({ name, location, logoUrl, ein, setError, selectMode }: CharityData) {
    const [isLiked, setIsLiked] = useState<Boolean>(false);
    // const addToDdFavList = async () => {
    //     if (!isLiked) {
    //         const liked = { name, location, logoUrl }
    //         await axios.post(`${API}/api/favCharityList`, liked)
    //             .then((response) => console.log(response))
    //             .catch((err) => setError(err.response.data.msg))
    //     }
    //     setIsLiked(true)
    // }

    const handleClick = () => {
        const likedCharity = { name, location, logoUrl }
        addFavToDb({ isLiked, likedCharity, API })
            .then((res) => {
                res === 'Already in fav list' && setError(res)
                setIsLiked(true)
            })
    }

    const AddFavBtn = () => <button onClick={() => handleClick()} className='text-lg'>{isLiked ? <BiSolidLike /> : <BiLike />}</button>

    return (
        <>
            <Card
                name={name}
                location={location}
                logoUrl={logoUrl}
                ein={ein}
                _id={ein}
                eventBtn={<AddFavBtn />}
                selectMode={selectMode}
            />
        </>
    )
}


        // <div className='relative flex flex-col justify-start items-start text-left w-60 h-80 m-4 p-4 bg-[--color-gold] rounded-3xl text-[--color-gray-4]'>
        //     <button className='absolute right-0 top-0 text-2xl border border-2 border-[--color-gray-1] rounded-3xl bg-[--color-gray-1]'><TiTickOutline /></button>
        //     <img className='w-52 h-36' src={logoUrl ? logoUrl : placeholderImg} alt={`Logo of ${name}`} />
        //     <div className='flex flex-col h-full w-full justify-between mt-1.5'>
        //         <div>
        //             <p>{name}</p>
        //         </div>
        //         <div className='flex flex-col items-center'>
        //             {error && <p>{error}</p>}
        //             <div className='flex flex-row justify-around items-center w-full'>
        // <button onClick={() => handleClick()} className='text-lg'>{isLiked ? <BiSolidLike /> : <BiLike />}</button>
        //                 <button onClick={() => toggleModal()} className='flex flex-row items-center text-lg'><small>Detail</small><MdReadMore /></button>
        //                 {!isHided && <CharityDetail _id={ein} name={name} location={location} logoUrl={logoUrl} ein={ein} isHided={isHided} setIsHided={setIsHided} />}
        //             </div>
        //         </div>
        //     </div>
        // </div>
