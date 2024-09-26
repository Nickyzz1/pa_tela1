import seriesData from '../00 - constants/series.json'; 

const Card = () => {
    const items = seriesData; 

    return (
        <div>
            {items.map((item) => (
                <div key={item.name}>
                    <img src={item.image} alt={item.name} />
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                    <p>{item.year}</p>
                </div>
            ))}
        </div>
    );
};
