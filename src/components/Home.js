import { Carousel } from "./Carousel"
import { MoviesList } from "./MoviesList"

export const Home = ({auth}) => {
    return (
        <main>
            <Carousel />
            <MoviesList auth={auth} />
        </main>
    )
}