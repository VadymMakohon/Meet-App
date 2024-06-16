import React from 'react';
import { useEffect, useState, useCallback } from 'react';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import EventsGenresChart from './components/EventsGenresChart';
import CityEventsChart from './components/CityEventsChart';
import { extractLocations, getEvents } from './api';
import './App.css';
import { InfoAlert, ErrorAlert, WarningAlert } from './components/Alert';

const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState('See all Cities');
  const [infoAlert, setInfoAlert] = useState("");
  const [errorAlert, setErrorAlert] = useState("");
  const [warningAlert, setWarningAlert] = useState('');
  const waitMessage = "Loading events, please wait...";

  const fetchData = useCallback(async () => {
    const allEvents = await getEvents();
    const filteredEvents =
      currentCity === 'See all Cities'
        ? allEvents
        : allEvents.filter((event) => event.location === currentCity);
    setEvents(filteredEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
  }, [currentCity, currentNOE]);

  useEffect(() => {
    if (navigator.onLine) {
      setWarningAlert('');
    } else {
      setWarningAlert('You seem to be offline!');
    }
    fetchData();
  }, [fetchData]);

  return (
    <div className="App">
      <header>
        <h1>Meet App</h1>
      </header>
      <div className='alerts-container'>
        {infoAlert.length ? <InfoAlert text={infoAlert} /> : null}
        {errorAlert.length ? <ErrorAlert text={errorAlert} /> : null}
        {warningAlert.length ? <WarningAlert text={warningAlert} /> : null}
      </div>
      <section>
        <h3>Choose the nearest city</h3>
        <CitySearch
          allLocations={allLocations}
          setCurrentCity={setCurrentCity}
          setInfoAlert={setInfoAlert}
        />
      </section>
      <section>
        <h3>Number of events</h3>
        <NumberOfEvents
          setCurrentNOE={setCurrentNOE}
          setErrorAlert={setErrorAlert}
        />
      </section>
      {events.length ? (
        <>
          <div className='charts-container'>
            <EventsGenresChart events={events} />
            <CityEventsChart allLocations={allLocations} events={events} />
          </div>
          <EventList events={events} />
        </>
      ) : (
        <p>{waitMessage}</p>
      )}
    </div>
  );
}

export default App;
