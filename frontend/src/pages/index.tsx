import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import { useState } from 'react';

export default function RootLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

