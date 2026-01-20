import { Route, Routes } from "react-router-dom";
import MoviesPage from "./pages/MoviesPage";
import MovieDetailsPage from "./pages/MoviesDetailsPage";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<MoviesPage />} />
            <Route path="/movies/:id" element={<MovieDetailsPage />} />
        </Routes>
    );
}
