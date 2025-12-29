import UserInfo from "../UserInfo/UserInfo";

type Props = {
    query: string;
    onQueryChange: (v: string) => void;
    onSearch: () => void;
    onReset: () => void;
    onRandom: () => void;
};
export default function Header({
                                   query,
                                   onQueryChange,
                                   onSearch,
                                   onReset,
                                   onRandom,
                               }: Props) {
    return (
        <div style={{ display: "flex", alignItems: "center", gap: 2, marginBottom: 2 }}>
            <h1 style={{ margin: 0 }}>Movies</h1>
            <input
                value={query}
                onChange={(e) => onQueryChange(e.target.value)}
                placeholder="Search movie..."
                style={{ padding: 8, minWidth: 220 }}
                onKeyDown={(e) => {
                    if (e.key === "Enter") onSearch();
                }}
            />
            <button onClick={onSearch}>Пошук</button>
            <button onClick={onReset}>Скинути</button>
            <button onClick={onRandom}>рандом(ід фільму)</button>



            <div style={{ marginLeft: "auto" }}>
                <UserInfo />
            </div>
        </div>
    );
}
