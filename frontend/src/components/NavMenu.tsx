import { NavLink } from "react-router-dom";
import { buttonPrimary } from "../assets/stylingTailwind";

export default function NavMenu() {
    return (
        <div >
            <NavLink to="/" className={`${buttonPrimary} flex w-40 justify-center mr-2`}>
                Back to home
            </NavLink>
        </div>
    )
}