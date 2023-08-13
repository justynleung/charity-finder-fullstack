import { Dispatch, FormEvent, FormEventHandler, SetStateAction, useState } from "react";

import { buttonPrimary } from "../assets/stylingTailwind";

interface Props {
    setFilter: Dispatch<SetStateAction<string>>
    // setSelectMode: Dispatch<SetStateAction<Boolean>>
    // selectMode: Boolean
}

const SearchBar: React.FC<Props> = ({ setFilter }) => {
    const [value, setValue] = useState<string>('')
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }
    const onFormSubmit = (e: FormEvent) => {
        e.preventDefault()
        setFilter(value)
    }
    // const handleSelectMode = () => {
    //     setSelectMode(!selectMode)
    // }
    return (
        <>
            {/* <button onClick={handleSelectMode}>Select Multiple</button> */}
            <form onSubmit={onFormSubmit} className="w-[40vw]">
                <input onChange={handleChange} type="text" placeholder="" className="w-8/12 mx-4 bg-[--color-bg] rounded-sm border-2  border-transparent focus:outline-none focus:border-2 focus:border-[--color-blue]" />
                <button type="submit" className={buttonPrimary} >Search</button>
            </form>
        </ >
    )
}

export default SearchBar;