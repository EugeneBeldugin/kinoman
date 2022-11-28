import './MoviesDetails.css'
import { MdClose } from "react-icons/md"
import { FaImdb } from "react-icons/fa"

export const MoviesDetails = ({ movie, isActive, onClose }) => {
    const {
        title,
        img,
        director,
        year,
        genre,
        producer,
        productionCompanies,
        runningTime,
        plot,
        writer,
        actors,
        countries,
        imdb
    } = movie

    if (isActive) {
        return (
            <div onClick={onClose} className='popup-bg'>
                <div onClick={e => e.stopPropagation()} className="details-page">
                    <MdClose onClick={onClose} className='close-icon' />
                    <img className="details-page__poster" src={img} alt={title} />
                    <h3 className='details-page__title'>{title}</h3>
                    <div className='datails-page__info-container'>
                        <div className='details-page__block main-info'>
                            <p className="card__info"><span className='card__info--decorated'>Director:</span> {director}</p>
                            <p className="card__info"><span className='card__info--decorated'>Genre:</span> {genre.join(', ')}</p>
                            <p className="card__info line"><span className='card__info--decorated'>Year:</span> {year}</p>
                        </div>
                        <div className='details-page__block scroll-block'>
                            <p className="card__info"><span className='card__info--decorated'>Producer:</span> {producer}</p>
                            <p className="card__info"><span className='card__info--decorated'>Writer:</span> {writer}</p>
                            <p className="card__info"><span className='card__info--decorated'>Production companies:</span> {productionCompanies.join(', ')}</p>
                            <p className="card__info"><span className='card__info--decorated'>Running time:</span> {runningTime}</p>
                            <p className="card__info"><span className='card__info--decorated'>Countries:</span> {countries.join(', ')}</p>
                            <p className="card__info"><span className='card__info--decorated'>Actors:</span> {actors.join(', ')}</p>
                            <p className="card__info"><span className='card__info--decorated'>Plot:</span> {plot}</p>
                        </div>
                        <div className='imdb-info'>
                            <FaImdb className='imdb-logo' />
                            <span className='imdb-raiting'>
                                <span className='card__info--decorated'>{imdb}</span>
                                /10
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}