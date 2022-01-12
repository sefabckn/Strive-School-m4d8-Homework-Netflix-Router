import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import MyNavbar from './Components/MyNavbar';
import TvShows from './Components/TvShows';
import MoviesRow from './Components/MoviesRow';
import Footer from './Components/Footer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return(
    <>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="/tv-shows" element={<TvShows />}/>
          <Route path="/" element={<MoviesRow />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}
export default App;
