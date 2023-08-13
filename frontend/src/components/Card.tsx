// React
import { useState, Dispatch, SetStateAction } from "react";

// Asset
import placeholderImg from "../assets/No-Image-Placeholder.svg.png";
import { TiTickOutline, MdReadMore } from "../assets/react-icons";

// Component
import CharityDetail from "./CharityDetail";

interface CharityData {
    name: string
    location: string
    logoUrl: string
    ein: string
    _id?: string
}

interface CardContent {
    name: string
    location: string
    logoUrl: string
    ein: string
    _id?: string
    eventBtn: JSX.Element
    selectMode: Boolean
    itemsSelected: CharityData[]
    setItemsSelected: Dispatch<SetStateAction<CharityData[] | []>>
}

const Card = ({ name, location, logoUrl, _id, ein, eventBtn, selectMode, itemsSelected, setItemsSelected }: CardContent) => {
    const [isHided, setIsHided] = useState<Boolean>(true)
    const [selected, setSelected] = useState<Boolean>(false)
    const toggleModal = () => {
        setIsHided(!isHided)
    }
    const handleClick = () => {
        let checkExistence = itemsSelected.find((item) => name === item.name)
        if (!checkExistence) {
            let data = [...itemsSelected]
            data.push({ name, location, logoUrl, ein })
            setItemsSelected(data)
        } else setItemsSelected([...itemsSelected])
        setSelected(!selected)
    }
    const btnClassName = 'absolute right-0 top-0 text-2xl border border-2 border-[--color-gray-1] rounded-3xl bg-[--color-gray-1]'
    const divClassName = 'relative flex flex-col justify-start items-start text-left w-60 h-80 m-4 p-4 bg-[--color-gold] rounded-3xl text-[--color-gray-4] border-[5px] border-transparent shadow-lg'
    return (
        <div className={`
            ${divClassName}
            ${selected && 'card-focus'}
        `}>
            <button
                onClick={handleClick}
                className={`
                    ${btnClassName} 
                    ${!selectMode && 'hidden'}
                    ${selected && 'btn-focus'}
                `}>
                <TiTickOutline />
            </button>
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