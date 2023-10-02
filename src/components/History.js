function History(props) {

    return (
        <div>
            <h3>History:</h3>
            <ul>
                {props.items.map((item) => (
                    <li key={item.website}>{item.website}{item.modifier > 0 && <span> ({item.modifier})</span>}</li>
                ))}
            </ul>
        </div>
    );
}

export default History;