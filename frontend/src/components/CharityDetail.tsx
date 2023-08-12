import placeholderImg from '../assets/No-Image-Placeholder.svg.png';


interface CharityData {
    name: string
    location: string
    logoUrl: string
    ein: string
    _id: string
    isHided: Boolean
    setIsHided: Function
}

const modalWrapperClass = 'fixed left-[50%] top-[50%] mt-[-15rem] ml-[-15rem] h-[30rem] w-[30rem] flex flex-col justify-center items-center bg-[--color-gold] rounded-3xl z-10';

const CharityDetail: React.FC<CharityData> = ({ name, location, logoUrl, ein, isHided, setIsHided }) => {
    return (
        <>
            <button onClick={() => setIsHided(!isHided)} className="fixed top-0 left-0 flex justify-center items-center w-screen h-screen bg-gray-700 bg-opacity-90 z-10" />
            <div className={`${modalWrapperClass} start-animation`}>
                <img className='w-52 h-36 mb-4' src={logoUrl ? logoUrl : placeholderImg} alt={`Logo of ${name}`} />
                <div className='text-left w-[280px]'>
                    <p>name: {name}</p>
                    <p>location: {location || 'Not provided'}</p>
                    <p>ein: {ein || 'Not provided'}</p>
                </div>
            </div>

        </>
    )
}

export default CharityDetail;
