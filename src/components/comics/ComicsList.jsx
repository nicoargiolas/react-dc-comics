import comics from "./comics.js";
import Card from "./Card.jsx";

export default function ComicsList() {
    function renderComics() {
        return comics.map(item => <Card key={item.id} comicSrc={item.thumb} comicTitle={item.title.toUpperCase()} />)
    }

    return (
        <section id="comics-list">
            <div className="container">
                <h2> CURRENT SERIES </h2>
                <div className="card-container">
                    {renderComics()}
                </div>
                <h4 className="load-more"> LOAD MORE </h4>
            </div>
        </section>
    );
}
