
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const MovieDetails = () =>{
    const [moviedetails, setMovieDetails] = useState('')
    const params = useParams()
    
    useEffect(()=>{
        const fetchMovieDetails = async() =>{
            try {
                const movies = await fetch("https://www.omdbapi.com/?apikey=99963efb&s=" + params.movieId)
                if(movies.ok){
                    const details = await movies.json()
                    console.log(response)
                    setMovieDetails(details)
                }else{
                    console.log('Error Occured')
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchMovieDetails()
    },[params.movieId])

    return (
        <div className="text-center text-white">
          {moviedetails && (
            <>
              <h2>{moviedetails.Title}</h2>
              <img src={moviedetails.Poster} alt="movie poster" />
            </>
          )}
        </div>
      );
    };
export default MovieDetails
