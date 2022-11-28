import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './Carousel.css'

const carousel = [
    {
        text: 'Stand with Ukraine',
        img: './assets/carousel/stand.png',
        id: 1
    },
    {
        text: 'Sound brings life',
        img: './assets/carousel/film2.jpg',
        id: 2
    },
    {
        text: 'Ukrainian movies',
        img: './assets/carousel/film3.webp',
        id: 3
    }
]

export const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false
    };

    return (
        <Slider {...settings}>
            {carousel.map(item => {
                return (
                    <div key={item.id}>
                        <div className="slide" style={{backgroundImage: `url(${item.img })`}}>
                            <p className="slide__text">{item.text}</p>
                        </div>
                    </div>
                )
            })}
        </Slider>
    )
}