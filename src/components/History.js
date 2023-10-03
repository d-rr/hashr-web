function History(props) {

    return (
        <div>
            <h3>History:</h3>
            <ul>
                {props.items.map((item) => (
                    <li key={item.domain}>
                        <span>{item.domain}</span>
                        {item.modifier > 0 && <span> ({item.modifier})</span>}
                        <button type="button" onClick={() => props.onClick(item.domain)}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default History;