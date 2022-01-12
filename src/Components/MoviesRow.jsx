//key = 99963efb
import {Component} from 'react'
import SingleMovie from './SingleMovie'
import Alert from 'react-bootstrap/Alert'
import { Spinner } from "react-bootstrap";
import {Container, Row, Col, Form} from 'react-bootstrap'
import { useEffect ,useState} from 'react';

const MovieRow = () =>{
/*   state = {
    movies: [],
    movies2: [],
    movies3: [],
    searchQuery: "",
    isLoading: true,
    isError: false,
  };
 */
const [movies, setMovies]= useState([])
const [movies2, setMovies2]= useState([])
const [movies3, setMovies3]= useState([])
const[searchQuery, setSearcQuery] = useState([])
const[isLoading, setIsLoading] = useState(true)
const[isError, setIsError] = useState(false)

  /* componentDidMount = () => {
    this.fetchMovies();
    this.fetchMovies2();
    this.fetchMovies3();
  }; */
  useEffect( ()=>{
     fetchMovies();
     fetchMovies2();
     fetchMovies3();
  }, []);

  const fetchMovies = async () => {
    try {
      let response = await fetch(
        "https://www.omdbapi.com/?apikey=99963efb&s=harry-potter"
      );
      if (response.ok) {
        console.log(response)
        let data = await response.json();
       /*  this.setState({
          movies: data.Search,
          isLoading: false,
        }); */
        setMovies(data.Search)
        setIsLoading(false)
        console.log(movies);
      } else {
        // if we fall here we're getting an error, maybe a 404
        /* this.setState({
          isLoading: false,
          isError: true,
        }); */
        setIsLoading(false)
        setIsError(true)
      }
    } catch (error) {
     /*  this.setState({
        isLoading: false,
        isError: true,
      }); */
      setIsLoading(false)
      setIsError(false)

    }
  };

 const fetchMovies2 = async () => {
    try {
      let response = await fetch(
        "https://www.omdbapi.com/?apikey=99963efb&s=lord"
      );
      if (response.ok) {
        let data = await response.json();
        /* this.setState({
          movies2: data.Search,
          isLoading: false,
        }); */
        setMovies2(data.Search)
        console.log(movies2);
      } else {
        // if we fall here we're getting an error, maybe a 404
        /* this.setState({
          isLoading: false,
          isError: true,
        }); */
        setIsLoading(false)
        setIsError(true)
      }
    } catch (error) {
    /*   this.setState({
        isLoading: false,
        isError: true,
      }); */
      setIsLoading(false)
      setIsError(true)
    }
  };

  const fetchMovies3 = async () => {
    try {
      let response = await fetch(
        "https://www.omdbapi.com/?apikey=99963efb&s=avengers"
      );
      if (response.ok) {
        let data = await response.json();
       /*  this.setState({
          movies3: data.Search,
          isLoading: false,
        }); */
        setMovies3(data.Search)
        console.log(movies3);
      } else {
        // if we fall here we're getting an error, maybe a 404
        /* this.setState({
          isLoading: false,
          isError: true,
        }); */
        setIsLoading(false)
        setIsError(true)
      }
    } catch (error) {
      /* this.setState({
        isLoading: false,
        isError: true,
      }); */
      setIsLoading(false)
      setIsError(true)
    }
  };

 
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Search movies"
                  value={searchQuery}
                  onChange={(e) =>
                    //this.setState({ searchQuery: e.target.value })
                    setSearcQuery(e.target.value)
                  }
                />
              </Form.Group>
            </Col>
          </Row>
        </Container>

        <section>
          <div class="container-fluid mt-1 ml-6 text-light">
            <div class="mb-2">
              <h4 class="d-table-cell mb-0 text-light">Harry Potter</h4>
            </div>

            <div class="row mx-n1 mb-lg-5">
              {isLoading && (
                <Spinner animation="border" variant="info" />
              )}
              {movies
                .filter((res) =>
                  res.Title.toLowerCase().includes(searchQuery)
                )
                .slice(0, 6)
                .map((res) => (
                  <SingleMovie src={res.Poster} title={res.Title} id={res.imdbID}/>
                ))}
            </div>
          </div>
        </section>

        <section>
          <div class="container-fluid mt-1 ml-6 text-light">
            <div class="mb-2">
              <h4 class="d-table-cell mb-0 text-light">Lord Of The Rings</h4>
            </div>

            <div class="row mx-n1 mb-lg-5">
              {isLoading && (
                <Spinner animation="border" variant="info" />
              )}
              {movies2
                .filter((res) =>
                  res.Title.toLowerCase().includes(searchQuery)
                )
                .slice(0, 6)
                .map((res) => (
                  <SingleMovie src={res.Poster} title={res.Title} id={res.imdbID}/>
                ))}
            </div>
          </div>
        </section>

        <section>
          <div class="container-fluid mt-1 ml-6">
            <div class="mb-2">
              <h4 class="d-table-cell mb-0 text-light">The Avengers</h4>
            </div>

            <div class="row mx-n1 mb-lg-5 text-light">
              {isLoading && (
                <Spinner animation="border" variant="info" />
              )}
              {movies3
                .filter((res) =>
                  res.Title.toLowerCase().includes(searchQuery)
                )
                .slice(0, 6)
                .map((res) => (
                  <SingleMovie src={res.Poster} title={res.Title} id={res.imdbID}/>
                ))}
            </div>
          </div>
        </section>
      </div>
    );
  
}

export default MovieRow;