export default function Card(props) {

    return (
        <div className="card">
            <img src={props.comicSrc} alt={props.comicTitle} />
            <h5>{props.comicTitle}</h5>
        </div>
    );
}