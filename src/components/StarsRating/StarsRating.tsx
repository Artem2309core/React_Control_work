type Props = {
    value: number; // 0..10
};
export default function StarsRating({ value }: Props) {
    const stars = Math.round((value / 10) * 5); // 0..5
    const full = "★★★★★".slice(0, stars);
    const empty = "☆☆☆☆☆".slice(0, 5 - stars);
    return (
        <span className="stars-rating" title={`TMDB: ${value}`}>
      {full}
            {empty}
    </span>
    );
}
