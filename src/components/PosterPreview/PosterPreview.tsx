type Props = {
    path: string | null;
    title: string;
};
export default function PosterPreview({ path, title }: Props) {
    const src = path ? `https://image.tmdb.org/t/p/w500${path}` : null;
    return (
        <div className="poster">
            {src ? (
                <img src={src} alt={title} className="poster-img" />
            ) : (
                <div className="poster-placeholder">No poster</div>
            )}
        </div>
    );
}
