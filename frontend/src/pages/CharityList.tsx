import axios from 'axios';
import { useEffect, useState } from 'react';

// Components
import CharityDetail from '../components/CharityDetail';
import SearchBar from '../components/SearchBar';
import Card from '../components/Card';

// Asset
import { BiLike, BiSolidLike, TiTickOutline, TiTick, MdReadMore } from "../assets/react-icons";
import placeholderImg from '../assets/No-Image-Placeholder.svg.png';

// Style
import { buttonPrimary } from '../assets/stylingTailwind';

const API_KEY = import.meta.env.VITE_API_KEY;
// const API = import.meta.env.VITE_API || "http://localhost:3000";
const API = "http://localhost:3000";

interface CharityData {
    name: string
    location: string
    logoUrl: string
    ein: string
}


export default function CharityList() {
    const [selectMode, setSelectMode] = useState<Boolean>(false);
    const [allData, setAllData] = useState<CharityData[]>([])
    const [filter, setFilter] = useState<string>('a')
    const getAllData = async () => {
        await axios.get(`https://partners.every.org/v0.2/search/${filter}?apiKey=${API_KEY}`)
            .then((res => {
                setAllData(res.data.nonprofits)

            }))
            .catch(err => console.error(`Error: ${err}`))
    }
    const addSelected = () => {
        console.log('first')
    }
    useEffect(() => {
        getAllData();
    }, [filter])
    return (
        <div className='flex flex-wrap justify-center h-fit text-[--color-text]'>
            <SearchBar setFilter={setFilter} setSelectMode={setSelectMode} selectMode={selectMode} />
            <div className={`${selectMode ? '' : 'invisible'}`}>
                <button className={`${buttonPrimary} mr-4`} onClick={addSelected}>Add Selected</button>
                <button className={buttonPrimary} onClick={() => setSelectMode(false)}>Exit</button>
            </div>
            {!filter && <h3 className='font-bold text-2xl text-[--color-gold]'>Enter something to serach for charities!!!</h3>}
            <div className='flex flex-row flex-wrap justify-center w-fit max-w-[1500px]'>
                {allData.map((item) => {
                    return <Charity key={item.name} name={item.name} location={item.location} logoUrl={item.logoUrl} ein={item.ein} />
                })}
            </div>
        </div>
    )
}

function Charity({ name, location, logoUrl, ein }: CharityData) {
    // const [isHided, setIsHided] = useState<Boolean>(true)
    const [isLiked, setIsLiked] = useState<Boolean>(false);
    const [error, setError] = useState(null)
    const addToDdFavList = async () => {
        if (!isLiked) {
            const liked = { name, location, logoUrl }
            await axios.post(`${API}/api/favCharityList`, liked)
                .then((response) => console.log(response))
                .catch((err) => setError(err.response.data.msg))
        }
        setIsLiked(true)
    }
    const handleClick = () => {
        addToDdFavList()
        if (error !== null) {
            setIsLiked(true)
        }
    }
    const AddFavBtn = () => <button onClick={() => handleClick()} className='text-lg'>{isLiked ? <BiSolidLike /> : <BiLike />}</button>
    // const toggleModal = () => {
    //     setIsHided(!isHided)
    // }

    return (
        <>
            <Card
                name={name}
                location={location}
                logoUrl={logoUrl}
                ein={ein}
                _id={ein}
                handleClick={handleClick}
                eventBtn={<AddFavBtn />}
            />
        </>
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


    )
}


// We made a dump with ``–oplog`` from a properly working system, but when restoring it we constantly faced `E11000 duplicate key` errors.

// The duplicate key obviously doesn't exist on the dumped database as it has an unique index, but as the dump takes hours to complete, it looks like that data that was deleted ends up being into the dump and data that was created after delation while the dump is running ends up being there too.

// This is the kind of situation that ``–oplogReplay`` should address, but it looks like the oplog is replayed after the indexes were recreated and thus the restore fails while recreating the indexes as it faces a state where duplicate data is present.