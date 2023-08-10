import { useState } from 'react';
import placeholderImg from '../assets/No-Image-Placeholder.svg.png';
interface FavCharityData {
    name: string
    location: string
    logoUrl: string
    ein: string
    _id: string
    isHided: Boolean
    setIsHided: Function
}

const modalWrapperClass = 'fixed left-[50%] top-[50%] mt-[-15rem] ml-[-15rem] h-[30rem] w-[30rem] flex flex-col justify-center items-center bg-[--color-gold-light] rounded-3xl z-10';

const CharityDetail: React.FC<FavCharityData> = ({ name, location, logoUrl, ein, _id, isHided, setIsHided }: FavCharityData) => {
    const [isClicked, setIsClicked] = useState<Boolean>(false)
    return (
        <>
            <button onClick={() => setIsHided(!isHided)} className="fixed top-0 left-0 flex justify-center items-center w-screen h-screen bg-gray-700 bg-opacity-90 z-0" />
            <div className={`${isClicked && 'modalAnimation'} ${modalWrapperClass}`}>
                <img className='w-52 h-36 mb-4' src={logoUrl ? logoUrl : placeholderImg} alt={`Logo of ${name}`} />
                <div className='text-left'>
                    <p>name: {name}</p>
                    <p>location: {location}</p>
                    <p>ein: {ein}</p>
                </div>
            </div>

        </>
    )
}

export default CharityDetail;
