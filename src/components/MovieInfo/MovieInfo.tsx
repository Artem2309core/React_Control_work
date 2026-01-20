import type { Genre } from "../../models/Genre";
import StarsRating from "../StarsRating/StarsRating";
type Props = {
    title: string;
    overview: string;
    voteAverage: number;
    releaseDate?: string;
    genres?: Genre[];
};
export default function MovieInfo({
                                      title,
                                      overview,
                                      voteAverage,
                                      releaseDate,
                                      genres,
                                  }: Props) {
    return (
        <div className="movie-info">
            <h1 className="movie-info-title">{title}</h1>
            <div className="movie-info-rating">
                <StarsRating value={voteAverage} />
                <span>{voteAverage}</span>
            </div>
            <div className="movie-info-release">
                Release: {releaseDate || "—"}
            </div>
            <div className="movie-info-genres">
                {(genres ?? []).map((g) => (
                    <span key={g.id} className="movie-info-genre-pill">
            {g.name}
          </span>
                ))}
            </div>
            <div className="movie-info-overview">
                {overview || "No overview"}
            </div>
        </div>
    );
}
