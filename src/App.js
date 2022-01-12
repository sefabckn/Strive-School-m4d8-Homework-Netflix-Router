import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import MyNavbar from './Components/MyNavbar';
import TvShows from './Components/TvShows';
import MoviesRow from './Components/MoviesRow';
import Footer from './Components/Footer'
function App() {
  return (
    <>
      <MyNavbar />
      <TvShows />
      <MoviesRow />
      <Footer />
    </>
  );
}
export default App;
