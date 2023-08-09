import { NavLink } from "react-router-dom";

export default function SearchBar() {
    return (
        <div className="flex flex-row justify-center mt-32 mb-6 w-full">
            <NavLink to="/">
                Back to home
            </NavLink>
            <input type="text" placeholder="Search" className="w-2/6 mx-10" />
            <NavLink to="/fav">
                My favorite
            </NavLink>
        </div>
    )
}
