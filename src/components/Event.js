import { useState } from "react";

const Event = ({ event }) => {
    const [showDetails, setShowDetails] = useState(false);
    return (
        <li className="event">
            <h3>{event.summary}</h3>
            <p>{event.created}</p>
            <p>{event.location}</p>
            <button
                className="details-button"
                onClick={() => setShowDetails(!showDetails)}>
                {showDetails ? 'hide details' : 'show details'}
            </button>
            {showDetails ? (
                <div className="details">
                    <h4>event details</h4>
                    <p>{event.description}</p>
                </div>)
                : null}
        </li>
    );
}

export default Event;