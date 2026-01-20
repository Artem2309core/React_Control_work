import type { Genre } from "../../models/Genre";
type Props = {
    genre: Genre;
    active: boolean;
    onClick: (id: number) => void;
};
export default function GenreBadge({ genre, active, onClick }: Props) {
    return (
        <button
            className={`genre-badge ${active ? "active" : ""}`}
            onClick={() => onClick(genre.id)}
        >
            {genre.name}
        </button>
    );
}
