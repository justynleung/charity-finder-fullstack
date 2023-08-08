import Navbar from '../components/Navbar';
import CharityList from '../components/CharityList';
import SearchBar from '../components/SearchBar';

export default function RootLayout() {
    return (
        <>
            <Navbar />
            <SearchBar />
            <CharityList />
        </>
    )
}