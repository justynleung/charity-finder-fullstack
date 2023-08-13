import { Dispatch, SetStateAction } from "react"
import ToggleDarkMode from "./toggleDarkMode"

interface NavBarComponents {
    darkMode: Boolean
    setDarkMode: Dispatch<SetStateAction<Boolean>>
}

const Navbar: React.FC<NavBarComponents> = ({ darkMode, setDarkMode }) => {
    return (
        <header className="flex flex-row justify-between items-center fixed top-0 w-screen h-24 bg-[--color-blue] text-[--color-text-2] text-left px-10 z-20">
            <h1 className="text-5xl font-bold">Charity Finder</h1>
            <button onClick={() => setDarkMode(!darkMode)}><ToggleDarkMode darkMode={darkMode} /></button>
        </header>
    )
}

export default Navbar;
