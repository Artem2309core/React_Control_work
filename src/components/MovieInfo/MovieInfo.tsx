import type { Genre } from "../../models/Genre";
import StarsRating from "../StarsRating/StarsRating";
type Props = {
    title: string;
    overview: string;
    voteAverage: number;
    releaseDate?: string;
    genres?: Genre[];
};
export default function MovieInfo({ title, overview, voteAverage, releaseDate, genres }: Props) {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <h1 style={{ margin: 0 }}>{title}</h1>
            <div style={{ display: "flex", gap: 8, alignItems: "center", opacity: 0.9 }}>
                <StarsRating value={voteAverage} />
                <span>{voteAverage}</span>
            </div>
            <div style={{ opacity: 0.8 }}>Release: {releaseDate || "—"}</div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {(genres ?? []).map((g) => (
                    <span
                        key={g.id}
                        style={{ padding: "4px 10px", border: "1px solid #999", borderRadius: 16 }}
                    >
            {g.name}
          </span>
                ))}
            </div>
            <div style={{ maxWidth: 900, lineHeight: 1.5 }}>
                {overview || "No overview"}
            </div>
        </div>
    );
}
