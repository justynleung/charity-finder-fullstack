import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import Rootlayout from './pages';
import CharityList from './components/CharityList';
import './App.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout />}>
      <Route index element={<CharityList />} />

    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
