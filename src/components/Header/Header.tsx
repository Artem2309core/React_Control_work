import UserInfo from "../UserInfo/UserInfo";

type Props = {
    query: string;
    onQueryChange: (v: string) => void;
    onSearch: () => void;
    onReset: () => void;
};

export default function Header({
                                   query,
                                   onQueryChange,
                                   onSearch,
                                   onReset,
                               }: Props) {
    return (
        <div className="header">
            <h1 className="header-title">Movies</h1>

            <input
                value={query}
                onChange={(e) => onQueryChange(e.target.value)}
                placeholder="Search movie..."
                className="header-search"
                onKeyDown={(e) => {
                    if (e.key === "Enter") onSearch();
                }}
            />

            <button onClick={onSearch}>Search</button>
            <button onClick={onReset}>Reset</button>

            <div className="header-user">
                <UserInfo />
            </div>
        </div>
    );
}
