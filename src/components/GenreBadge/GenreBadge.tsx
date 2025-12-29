import type { Genre } from "../../models/Genre";
type Props = {
    genre: Genre;
    active: boolean;
    onClick: (id: number) => void;
}
export default function GenreBadge({ genre, active, onClick }: Props) {
    return (
        <button
            onClick={() => onClick(genre.id)}
            style={{
                padding: "6px 10px",
                borderRadius: 16,
                border: "1px solid #999",
                background: active ? "#ddd" : "white",
                cursor: "pointer",
            }}
        >
            {genre.name}
        </button>
    );
}
