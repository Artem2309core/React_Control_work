import type { Movie } from "../../models/Movie";
import MoviesListCard from "../MoviesListCard/MoviesListCard";
type Props = {
    movies: Movie[];
};
export default function MoviesList({ movies }: Props) {
    return (
        <div style={{ display: "grid", gap: 12 }}>
            {movies.map((m) => (
                <MoviesListCard key={m.id} movie={m} />
            ))}
        </div>
    );
}
