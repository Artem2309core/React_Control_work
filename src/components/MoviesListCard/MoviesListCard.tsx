import { Link } from "react-router-dom";
import type { Movie } from "../../models/Movie";
import PosterPreview from "../PosterPreview/PosterPreview";
import StarsRating from "../StarsRating/StarsRating";
type Props = { movie: Movie };
export default function MoviesListCard({ movie }: Props) {
    return (
        <Link
            to={`/movies/${movie.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
        >
            <div
                style={{
                    border: "1px solid #ddd",
                    borderRadius: 12,
                    padding: 12,
                    display: "flex",
                    gap: 12,
                }}
            >
                <PosterPreview path={movie.poster_path} title={movie.title} />
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <div style={{ fontSize: 18, fontWeight: 600 }}>{movie.title}</div>

                    <div style={{ display: "flex", gap: 8, alignItems: "center", opacity: 0.85 }}>
                        <StarsRating value={movie.vote_average} />
                        <span>{movie.vote_average}</span>
                    </div>
                    <div style={{ opacity: 0.85 }}>
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
