import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getMovieById } from "../api/tmdb.api";
import PosterPreview from "../components/PosterPreview/PosterPreview";
import MovieInfo from "../components/MovieInfo/MovieInfo";
import type { Genre } from "../models/Genre";
type MovieDetails = {
    id: number;
    title: string;
    overview: string;
    poster_path: string | null;
    vote_average: number;
    release_date?: string;
    genres?: Genre[];
};
export default function MovieDetailsPage() {
    const { id } = useParams<{ id: string }>();
    const movieId = Number(id);
    const [movie, setMovie] = useState<MovieDetails | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (!id || !Number.isFinite(movieId)) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setError("Invalid movie id");
            return;
        }
        setLoading(true);
        setError(null);
        setMovie(null);
        getMovieById(movieId)
            .then((data) => setMovie(data))
            .catch((e) => setError(String(e)))
            .finally(() => setLoading(false));
    }, [id, movieId]);
    return (
        <div className="page">
            <Link to="/" className="back-link">
                ← Back
            </Link>
            {loading && <div className="loading-text">Loading…</div>}
            {error && <div className="error-text">{error}</div>}
            {movie && !error && (
                <div className="details-layout">
                    <PosterPreview path={movie.poster_path} title={movie.title} />
                    <MovieInfo
                        title={movie.title}
                        overview={movie.overview}
                        voteAverage={movie.vote_average}
                        releaseDate={movie.release_date}
                        genres={movie.genres}
                    />
                </div>
            )}
        </div>
    );
}
