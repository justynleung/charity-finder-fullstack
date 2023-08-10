import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useState } from 'react';

export default function RootLayout() {
    const [darkMode, setDarkMode] = useState<Boolean>(true)
    return (
        <div className={`${darkMode ? 'dark' : 'light'} w-screen h-screen`}>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <Outlet />
        </div>
    )
}

