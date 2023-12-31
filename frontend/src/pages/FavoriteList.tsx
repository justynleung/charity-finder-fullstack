import { useEffect, useState, Dispatch, SetStateAction, useMemo } from 'react';

// Components
import NavMenu from '../components/NavMenu';
import SelectMultiple from '../components/SelectMultiple';

// Asset
import { AiOutlineDelete } from "../assets/react-icons"

// Services
import { deleteFromFavList, getFavList } from '../services';
import FavCard from '../components/FavCard';

// Style
import { buttonPrimary } from '../assets/stylingTailwind';

const API = import.meta.env.VITE_API || "http://localhost:3000";
// const API = "http://localhost:3000";

interface CharityData {
    name: string
    location: string
    logoUrl: string
    ein: string
    _id?: string
}

interface DLocal extends CharityData {
    forceUpdate: Function
    hasUpdated: Boolean
    selectMode: Boolean
    favItemsSelected: CharityData[]
    setItemsSelected: Dispatch<SetStateAction<CharityData[] | []>>
}


export default function FavoriteList() {
    const [allData, setAllData] = useState<CharityData[]>([]);
    const [hasUpdated, setHasUpdated] = useState<Boolean>(true);
    const [selectMode, setSelectMode] = useState<Boolean>(false);
    const [itemsSelected, setItemsSelected] = useState<CharityData[] | []>([])

    useEffect(() => {
        getFavList(API)
            .then((data) => {
                setAllData(data);
            });
    }, [hasUpdated, selectMode])

    const removeSelected = async () => {
        console.log(itemsSelected)
        await Promise.all(itemsSelected.map((item) => {
            var _id = item._id
            deleteFromFavList({ API, _id })
        }))
        setTimeout(() => {
            setHasUpdated(!hasUpdated)
        }, 500);
    }

    const resetSelected = () => {
        setSelectMode(false)
    }

    return (
        <div className='flex flex-col justify-center items-center self-start w-full text-[--color-text] '>
            <div className='mt-32 sticky top-[6rem] flex flex-row justify-center items-center text-center bg-[--color-system-bg] p-4 z-10'>
                <NavMenu />
                <SelectMultiple setSelectMode={setSelectMode} selectMode={selectMode} />
            </div>
            <div className={`${selectMode ? '' : 'invisible'} sticky top-[9rem] bg-[--color-system-bg] p-4 z-10`}>
                <button className={`${buttonPrimary} mr-4`} onClick={removeSelected}>Remove Selected</button>
                <button className={buttonPrimary} onClick={() => setSelectMode(false)}>Exit</button>
            </div>
            <h2 className='font-bold text-3xl'>{allData.length === 0 ? "No favorite charity" : "List of favorite charities"}</h2>
            <div className='flex flex-wrap justify-center h-fit'>
                <div className='flex flex-row flex-wrap justify-center w-fit max-w-[1500px]'>
                    {allData.map((item) => {
                        return (
                            <FavCharity
                                key={item._id} _id={item._id} name={item.name} location={item.location} logoUrl={item.logoUrl} ein={item.ein}
                                forceUpdate={setHasUpdated}
                                hasUpdated={hasUpdated}
                                selectMode={selectMode}
                                favItemsSelected={itemsSelected}
                                setItemsSelected={setItemsSelected}
                            />
                        )

                    })}
                </div>
            </div>
        </div>
    )
}

const FavCharity: React.FC<DLocal> = ({ name, location, logoUrl, ein, _id, forceUpdate, hasUpdated, selectMode, favItemsSelected, setItemsSelected }) => {

    const handleClick = async () => {
        await deleteFromFavList({ API, _id })
        forceUpdate(!hasUpdated)
    }

    const DeleteBtn = () => <button onClick={() => handleClick()} className='text-lg'><AiOutlineDelete /></button>

    return (
        <>
            <FavCard
                name={name}
                location={location}
                logoUrl={logoUrl}
                ein={ein}
                _id={_id}
                eventBtn={<DeleteBtn />}
                selectMode={selectMode}
                itemsSelected={favItemsSelected}
                setItemsSelected={setItemsSelected}
            />
        </>

    )
}

// in case there is any problem, original codebase is here

// <div className='relative flex flex-col justify-start items-start text-left w-60 h-80 m-4 p-4 bg-[--color-gold] rounded-3xl text-[--color-gray-4]'>
//     <button className='absolute right-0 top-0 text-2xl border border-2 border-[--color-gray-1] rounded-3xl bg-[--color-gray-1]'><TiTickOutline /></button>
//     <img className='w-52 h-36' src={logoUrl ? logoUrl : placeholderImg} alt={`Logo of ${name}`} />
//     <div className='flex flex-col h-full w-full justify-between mt-1.5'>
//         <div>
//             <p>{name}</p>
//         </div>
//         <div className='flex flex-col items-center'>
//             <div className='relative flex flex-row justify-around items-center w-full'>
                // <button onClick={() => handleClick()} className='text-lg'><AiOutlineDelete /></button>
//                 <button onClick={() => toggleModal()} className='flex flex-row items-center text-lg'><small>Detail</small><MdReadMore /></button>
//                 {!isHided && <CharityDetail _id={_id} name={name} location={location} logoUrl={logoUrl} ein={ein} isHided={isHided} setIsHided={setIsHided} />}
//             </div>
//         </div>
//     </div>
// </div> 