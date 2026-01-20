import type { Movie } from "../../models/Movie";
import MoviesListCard from "../MoviesListCard/MoviesListCard";
type Props = {
    movies: Movie[];
};
export default function MoviesList({ movies }: Props) {
    if (!movies.length) {
        return <div>No movies</div>;
    }
    return (
        <div className="movies-list">
            {movies.map((movie) => (
                <MoviesListCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
}
