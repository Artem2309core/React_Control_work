type Props = {
    path: string | null;
    title: string;
};
export default function PosterPreview({ path, title }: Props) {
    const src = path ? `https://image.tmdb.org/t/p/w500${path}` : null;
    return (
        <div
            style={{
                width: 100,
                height: 150,
                background: "#eee",
                borderRadius: 10,
                overflow: "hidden",
                flexShrink: 0,
            }}
        >
            {src ? (
                <img
                    src={src}
                    alt={title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
            ) : (
                <div style={{ padding: 8, fontSize: 12, opacity: 0.7 }}>No poster</div>
            )}
        </div>
    );
}
