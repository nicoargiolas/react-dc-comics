import List from "./List.jsx";

const headerNav = ["CHARACTERS", "COMICS", "MOVIES", "TV", "GAMES", "COLLECTIBLES", "VIDEOS", "FANS", "NEWS", "SHOP"];

export default function Header() {
    return (<header>
        <div className="container">
            <img src="../../public/img/dc-logo.png" alt="DC Logo" />
            {List(headerNav)}
        </div>
    </header>);
}