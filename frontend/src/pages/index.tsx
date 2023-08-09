import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import CharityList from './CharityList';
import SearchBar from '../components/SearchBar';

export default function RootLayout() {
    return (
        <>
            <Navbar />
            <SearchBar />
            <Outlet />
        </>
    )
}