import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import MyNavbar from './Components/MyNavbar';
import TvShows from './Components/TvShows';
import MoviesRow from './Components/MoviesRow';
import Footer from './Components/Footer'
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
        <MyNavbar />
        <TvShows />
        <MoviesRow />
        <Footer />
    </BrowserRouter>
    </>
  );
}
export default App;
