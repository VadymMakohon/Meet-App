import React, { useState } from 'react';

const NumberOfEvents = ({ setNumberOfEvents }) => {
    const [number, setNumber] = useState(32);

    const handleInputChanged = (event) => {
        const value = event.target.value;
        setNumber(value);
        setNumberOfEvents(value);
    };

    return (
        <div id="number-of-events">
            <input
                type="number"
                role="textbox" // Ensure role is properly set
                className="number"
                value={number}
                onChange={handleInputChanged}
            />
        </div>
    );
};

export default NumberOfEvents;
