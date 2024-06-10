import React, { useState } from 'react';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import './App.css';

function App() {
  const [numberOfEvents, setNumberOfEvents] = useState(32);
  const [events, setEvents] = useState([]);

  // Assume you have a function to fetch events
  const fetchEvents = async () => {
    // Fetch events and set them
    setEvents([]);
  };

  return (
    <div className="App">
      <CitySearch />
      <NumberOfEvents setNumberOfEvents={setNumberOfEvents} />
      <EventList events={events.slice(0, numberOfEvents)} />
    </div>
  );
}

export default App;
