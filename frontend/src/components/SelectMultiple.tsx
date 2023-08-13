// To use this component, need to locally declare selectMode & setSelectMode 
import { Dispatch, SetStateAction } from 'react'
import { buttonPrimary } from '../assets/stylingTailwind'
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
                className={`${buttonPrimary} w-40`}
            >Select Multiple</button>
        </>
    )
}

export default SelectMultiple