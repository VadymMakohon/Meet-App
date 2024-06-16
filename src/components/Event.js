import { useState } from "react";

const Event = ({ event }) => {
    const [showDetails, setShowDetails] = useState(false);
    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };
    return (
        <li className='event'>
            <p className='location'>{event.location}</p>
            <p className='summary'>{event.summary}</p>
            <p className='created'>{(event.created)}</p>
            {showDetails ? (
                <div
                    id='event-details'
                    className="event-details des-info animate__animated animate__fadeIn">
                    {event.description}
                </div>
            ) : null}

            <button
                data-testid='details-btn'
                onClick={toggleDetails}
                className='hide-details details-btn'
            >
                {showDetails ? 'hide details' : 'show details'}
            </button>
        </li>
    );
};

export default Event;
