import { Dispatch, FormEvent, FormEventHandler, SetStateAction, useState } from "react";
import { NavLink } from "react-router-dom";

import { buttonPrimary } from "../assets/stylingTailwind";

interface Props {
    setFilter: Dispatch<SetStateAction<string>>
    setSelectMode: Dispatch<SetStateAction<Boolean>>
    selectMode: Boolean
}

const SearchBar: React.FC<Props> = ({ setFilter, setSelectMode, selectMode }) => {
    const [value, setValue] = useState<string>('')
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }
    const onFormSubmit = (e: FormEvent) => {
        e.preventDefault()
        setFilter(value)
    }
    const handleSelectModeor = () => {
        setSelectMode(!selectMode)
    }
    return (
        <div
            className="flex flex-row justify-center mt-32 mb-6 w-full text-[--color-text]"
        >
            <button onClick={handleSelectModeor}>Select Multiple</button>
            <form onSubmit={onFormSubmit} className="w-2/6 mx-4">
                <input onChange={handleChange} type="text" placeholder="" className="w-8/12 mx-4 bg-[--color-bg] rounded-sm border-2  border-transparent focus:outline-none focus:border-2 focus:border-[--color-blue]" />
                <button type="submit" className={buttonPrimary} >Search</button>
            </form>
            <NavLink to="/fav">
                My Favorite List
            </NavLink>
        </div >
    )
}

export default SearchBar;