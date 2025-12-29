type Props = {
    value: number;
};
export default function StarsRating({ value }: Props) {
    const stars = Math.round((value / 10) * 5); // 0..5
    const full = "★★★★★".slice(0, stars);
    const empty = "☆☆☆☆☆".slice(0, 5 - stars);
    return (
        <span title={`TMDB: ${value}`}>
      {full}
            {empty}
    </span>
    );
}
