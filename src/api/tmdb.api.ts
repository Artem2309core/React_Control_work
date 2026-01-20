const API_URL = "https://api.themoviedb.org/3";
const TOKEN = import.meta.env.VITE_TMDB_TOKEN as string
if (!TOKEN) {
    throw new Error("VITE_TMDB_TOKEN is missing in .env.local");
}
const headers = {
    Authorization: `Bearer ${TOKEN}`,
};
async function request(path: string) {
    const res = await fetch(`${API_URL}${path}`, { headers });
    if (!res.ok) throw new Error(`${path} failed: ${res.status}`);
    return res.json();
}
// фільми
export function getMovies(page = 1, genreId?: number) {
    const genrePart = genreId ? `&with_genres=${genreId}` : "";
    return request(`/discover/movie?page=${page}${genrePart}`);
}

// пошук жанрів
export function getGenres() {
    return request(`/genre/movie/list`);
}

// пошук по назві
export function searchMovies(query: string, page = 1) {
    return request(`/search/movie?query=${encodeURIComponent(query)}&page=${page}`);

}
export function getMovieById(id: number) {
    return request(`/movie/${id}`);
}

