export default function List(array) {
    return (
        <ul>
            {array.map((item, index) => (
                <li key={index}>{item}</li>))}
        </ul>
    )
}