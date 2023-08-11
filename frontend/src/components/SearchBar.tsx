import { Dispatch, SetStateAction, useState } from "react";
import { NavLink } from "react-router-dom";

interface Props {
    setFilter: Dispatch<SetStateAction<string>>
}

const SearchBar: React.FC<Props> = ({ setFilter }) => {
    const [value, setValue] = useState<string>('')
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }
    const handleClick = () => {
        setFilter(value)
    }
    return (
        <div className="flex flex-row justify-center mt-32 mb-6 w-full text-[--color-text]">
            <NavLink to="/">
                Back to home
            </NavLink>
            <div className="w-2/6 mx-4">
                <input onChange={handleChange} type="text" placeholder="" className="w-8/12 mx-4 bg-[--color-bg] rounded-sm border-2  border-transparent focus:outline-none focus:border-2 focus:border-[--color-blue]" />
                <button className="border border-[--color-gray-5] bg-[--color-gray-4] text-[--color-gray-0] rounded px-2" onClick={handleClick}>Search</button>
            </div>
            <NavLink to="/fav">
                My Favorite List
            </NavLink>
        </div >
    )
}

export default SearchBar;