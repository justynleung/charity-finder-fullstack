interface FavCharityData {
    name: string
    location: string
    logoUrl: string
    ein: string
    _id: string
}

const CharityDetail: React.FC<FavCharityData> = (props: FavCharityData) => {
    return (
        <>
            <div className='absolute bg-red-400 h-36 w-36'></div>
        </>
    )
}

export default CharityDetail;
