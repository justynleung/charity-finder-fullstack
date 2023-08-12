// To use this component, need to locally declare selectMode & setSelectMode 
import { Dispatch, SetStateAction } from 'react'

interface DSelectMultiple {
    setSelectMode: Dispatch<SetStateAction<Boolean>>
    selectMode: Boolean
}
const SelectMultiple = ({ selectMode, setSelectMode }: DSelectMultiple) => {
    const handleSelectMode = () => {
        setSelectMode(!selectMode)
    }
    return (
        <>
            <button
                onClick={handleSelectMode}
                className='w-60'
            >Select Multiple</button>
        </>
    )
}

export default SelectMultiple