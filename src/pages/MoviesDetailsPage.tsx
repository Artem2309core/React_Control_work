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
    const { id } = useParams();
    const movieId = Number(id);
    const [movie, setMovie] = useState<MovieDetails | null>(null);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        if (!Number.isFinite(movieId)) {
            setError("Invalid movie id");
            return;
        }
        setError(null);
        getMovieById(movieId)
            .then((data) => setMovie(data))
            .catch((e) => setError(String(e)));
    }, [movieId]);
    return (
        <div style={{ padding: 16 }}>
            <Link to="/">← Back</Link>
            {error && <div style={{ color: "crimson", marginTop: 12 }}>{error}</div>}
            {!error && !movie && <div style={{ marginTop: 12 }}>Loading…</div>}
            {movie && (
                <div style={{ display: "flex", gap: 16, marginTop: 12 }}>
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

