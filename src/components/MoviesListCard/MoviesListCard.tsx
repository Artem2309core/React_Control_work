import { Link } from "react-router-dom";
import type { Movie } from "../../models/Movie";
import PosterPreview from "../PosterPreview/PosterPreview";
import StarsRating from "../StarsRating/StarsRating";
type Props = { movie: Movie };
export default function MoviesListCard({ movie }: Props) {
    return (
        <Link to={`/movies/${movie.id}`} className="movie-card-link">
            <div className="movie-card">
                <PosterPreview path={movie.poster_path} title={movie.title} />
                <div className="movie-card-body">
                    <div className="movie-card-title">{movie.title}</div>
                    <div className="movie-card-rating">
                        <StarsRating value={movie.vote_average} />
                        <span>{movie.vote_average}</span>
                    </div>
                    <div className="movie-card-overview">
                        {movie.overview ? (
                            <>
                                {movie.overview.slice(0, 220)}
                                {movie.overview.length > 220 ? "…" : ""}
                            </>
                        ) : (
                            "No overview"
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );
}
