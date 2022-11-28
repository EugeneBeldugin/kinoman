import './Card.css';
import { FiZoomIn } from "react-icons/fi";


export const Card = ({ movie, onClick, auth }) => {

    const { title, img, genre, director, year } = movie;
    return (
        <div className="card">
            <h3 className="card__title">{title.toUpperCase()}</h3>
            <img className="card__img" src={img} alt={title} />

            {
                auth ?

                    <div className='card__info-wrapper'>
                        <p className="card__info"><span className='card__info--decorated'>Director:</span> {director}</p>
                        <p className="card__info"><span className='card__info--decorated'>Genre:</span> {genre.join(', ')}</p>
                        <p className="card__info"><span className='card__info--decorated'>Year:</span> {year}</p>
                        <FiZoomIn onClick={() => onClick(movie)} className='card__icon' />
                    </div>

                    :

                    <div className='card__info-wrapper'>
                        <p className="card__info">Please Sign In for info</p>
                    </div>
            }


        </div>
    )
}