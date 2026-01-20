import { useEffect, useMemo, useState } from "react";
import { getGenres, getMovies, searchMovies } from "../api/tmdb.api";
import type { Movie } from "../models/Movie";
import type { Genre } from "../models/Genre";
import MoviesList from "../components/MoviesList/MoviesList";
import GenreBadge from "../components/GenreBadge/GenreBadge";
import Header from "../components/Header/Header";

export default function MoviesPage() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [genres, setGenres] = useState<Genre[]>([]);
    const [page, setPage] = useState(1);

    const [selectedGenreId, setSelectedGenreId] = useState<number | null>(null);

    const [query, setQuery] = useState("");
    const [mode, setMode] = useState<"discover" | "search">("discover");

    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    // genres
    useEffect(() => {
        getGenres()
            .then((data) => setGenres(data.genres))
            .catch((e) => setError(String(e)));
    }, []);

    // movies
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLoading(true);
        setError(null);

        const p = page;

        const promise =
            mode === "search"
                ? searchMovies(query.trim(), p)
                : getMovies(p, selectedGenreId ?? undefined);

        promise
            .then((data) => setMovies(data.results))
            .catch((e) => setError(String(e)))
            .finally(() => setLoading(false));
    }, [page, mode, query, selectedGenreId]);
    function handleGenreClick(id: number) {
        setMode("discover");
        setQuery("");
        setPage(1);
        setSelectedGenreId((prev) => (prev === id ? null : id));
    }
    function handleSearch() {
        const q = query.trim();
        if (!q) return;
        setMode("search");
        setSelectedGenreId(null);
        setPage(1);
    }
    function handleReset() {
        setQuery("");
        setMode("discover");
        setSelectedGenreId(null);
        setPage(1);
    }
    const title = useMemo(() => {
        if (mode === "search") return `Search: "${query.trim()}"`;
        if (selectedGenreId) {
            const g = genres.find((x) => x.id === selectedGenreId);
            return g ? `Genre: ${g.name}` : "Genre";
        }
        return "All movies";
    }, [mode, query, selectedGenreId, genres]);
    return (
        <div className="page">
            <Header
                query={query}
                onQueryChange={setQuery}
                onSearch={handleSearch}
                onReset={handleReset}
            />
            <div className="page-subtitle">{title}</div>
            <div className="genres-row">
                {genres.map((g) => (
                    <GenreBadge
                        key={g.id}
                        genre={g}
                        active={selectedGenreId === g.id}
                        onClick={handleGenreClick}
                    />
                ))}
            </div>
            <div className="pagination">
                <button
                    disabled={page === 1 || loading}
                    onClick={() => setPage((p) => p - 1)}
                >
                    Prev
                </button>
                <span className="pagination-page">Page: {page}</span>
                <button disabled={loading} onClick={() => setPage((p) => p + 1)}>
                    Next
                </button>
                {loading && <span className="loading-text">Loading…</span>}
            </div>
            {error && <div className="error-text">{error}</div>}
            <MoviesList movies={movies} />
        </div>
    );
}
