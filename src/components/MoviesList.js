import { useState, useEffect } from "react"
import { Card } from "./Card"
import { MoviesDetails } from "./MoviesDetails"
import './MoviesList.css'


export const MoviesList = ({ auth }) => {
    const [movies, setMovies] = useState([])
    const [movieToShow, setMovieToShow] = useState({})
    const [showMovieDetails, setShowMovieDetails] = useState(false)
    const [moviesToShow, setMoviesToShow] = useState(20)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetch('./data/movies.json')
            .then(data => data.json())
            .then(data => setMovies(data.movies))
    }, [])

    const openMovieDetailsHandler = (movie) => {
        setMovieToShow(movie)
        setShowMovieDetails(true)
    }

    const closeMoviesDetails = () => {
        setShowMovieDetails(false)
    }

    useEffect(() => {
        if (moviesToShow < 30) {
            document.addEventListener('scroll', scrollHandler)
        }

        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [moviesToShow])

    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            setTimeout(() => {
                setLoading(true)
            }, 1000);
            setTimeout(() => {
                setLoading(false)
                setMoviesToShow(moviesToShow + 20)
            }, 3000);
        }
    }

    console.log(moviesToShow);

    return (
        <>
            <div className="list-container">
                {movies?.slice(0, moviesToShow).map(movie => <Card auth={auth} onClick={openMovieDetailsHandler} key={movie.id} movie={movie} />)}
            </div>
            {loading && <p className="loading">Loading . . .</p>}
            <MoviesDetails movie={movieToShow} isActive={showMovieDetails} onClose={closeMoviesDetails} />
        </>
    )
}