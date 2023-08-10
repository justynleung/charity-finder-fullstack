import { NavLink } from "react-router-dom";


export default function NavMenu() {
    return (
        <div className="flex flex-row justify-center mt-32 mb-6 w-full">
            <NavLink to="/">
                Back to home
            </NavLink>
        </div>
    )
}