import { useEffect, useState } from "react";

const CitySearch = ({ allLocations, setCurrentCity, setInfoAlert }) => {
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        setSuggestions(allLocations);
    }, [allLocations]);

    const handleInputChanged = (event) => {
        const value = event.target.value;
        const filteredLocations = allLocations.filter(location =>
            location.toUpperCase().indexOf(value.toUpperCase()) > -1
        );
        setQuery(value);
        setSuggestions(filteredLocations);

        const infoText = filteredLocations.length === 0
            ? 'We can not find the city you are looking for. Please try another city'
            : '';
        setInfoAlert(infoText);
    };

    const handleItemClicked = (event) => {
        const value = event.target.textContent;
        setQuery(value);
        setShowSuggestions(false);
        setCurrentCity(value);
        setInfoAlert('');
    };

    return (
        <div id="city-search">
            <input
                type="text"
                className="city"
                placeholder="Search for a city"
                value={query}
                onFocus={() => setShowSuggestions(true)}
                onChange={handleInputChanged}
            />
            {showSuggestions && (
                <ul className="suggestions">
                    {suggestions.map(suggestion => (
                        <li onClick={handleItemClicked} key={suggestion}>
                            {suggestion}
                        </li>
                    ))}
                    <li key="See all Cities" onClick={handleItemClicked}>
                        <b>See all Cities</b>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default CitySearch;
