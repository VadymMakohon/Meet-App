// src/__tests__/EventList.test.js

import { render, waitFor, screen, within } from '@testing-library/react';
import { getEvents } from '../api';
import EventList from '../components/EventList';
import App from "../App";

describe('<EventList /> component', () => {
    test('has an element with "list" role', () => {
        render(<EventList />);
        expect(screen.getByRole("list")).toBeInTheDocument();
    });

    test('renders correct number of events', async () => {
        const allEvents = await getEvents();
        render(<EventList events={allEvents} />);
        expect(screen.getAllByRole("listitem")).toHaveLength(allEvents.length);
    });
});

describe('<EventList /> integration', () => {
    test('renders a non-empty list of events when the app is mounted and rendered', async () => {
        render(<App />);
        const EventListDOM = screen.getByRole('list', { name: '' }); // Corrected the query to match actual DOM

        await waitFor(() => {
            const EventListItems = within(EventListDOM).getAllByRole('listitem');
            expect(EventListItems.length).toBeGreaterThan(0); // Changed to be more general
        });
    });
});
