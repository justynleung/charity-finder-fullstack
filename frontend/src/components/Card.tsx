// React
import { useState } from "react";

// Asset
import placeholderImg from "../assets/No-Image-Placeholder.svg.png";
import { TiTickOutline, AiOutlineDelete, MdReadMore } from "../assets/react-icons";

// Component
import CharityDetail from "./CharityDetail";

// interface CharityData {
//     name: string
//     location: string
//     logoUrl: string
//     ein: string
//     _id: string
// }

interface CardContent {
    name: string
    location: string
    logoUrl: string
    ein: string
    _id: string
    handleClick: () => Promise<void> | void
    eventBtn: JSX.Element
}

const Card = ({ name, location, logoUrl, _id, ein, handleClick, eventBtn }: CardContent) => {
    const [isHided, setIsHided] = useState<Boolean>(true)
    const toggleModal = () => {
        setIsHided(!isHided)
    }
    return (
        <div className='relative flex flex-col justify-start items-start text-left w-60 h-80 m-4 p-4 bg-[--color-gold] rounded-3xl text-[--color-gray-4]'>
            <button className='absolute right-0 top-0 text-2xl border border-2 border-[--color-gray-1] rounded-3xl bg-[--color-gray-1]'><TiTickOutline /></button>
            <img className='w-52 h-36' src={logoUrl ? logoUrl : placeholderImg} alt={`Logo of ${name}`} />
            <div className='flex flex-col h-full w-full justify-between mt-1.5'>
                <div>
                    <p>{name}</p>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='relative flex flex-row justify-around items-center w-full'>
                        {eventBtn}
                        <button onClick={() => toggleModal()} className='flex flex-row items-center text-lg'><small>Detail</small><MdReadMore /></button>
                        {!isHided && <CharityDetail _id={_id} name={name} location={location} logoUrl={logoUrl} ein={ein} isHided={isHided} setIsHided={setIsHided} />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card