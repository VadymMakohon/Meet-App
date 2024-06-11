import { loadFeature, defineFeature } from 'jest-cucumber';
import App from '../App';
import { render, waitFor, within, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/showAndHideEventsDetails.feature');

defineFeature(feature, (test) => {
    // Scenario 1
    test('An event element is collapsed by default.', ({ given, when, then }) => {
        given('the user first opens the app', () => {
            render(<App />);
        });

        when(
            'the user receives the full list of events (specific for the city or all events)',
            async () => {
                const EventListDOM = await screen.findByRole('list', { name: /event-list/i });

                await waitFor(() => {
                    const EventListItems = within(EventListDOM).getAllByRole('listitem');
                    expect(EventListItems.length).toBe(32);
                });
            }
        );

        then('all events will collapse by default.', () => {
            const details = screen.queryByText('Event Details');
            expect(details).not.toBeInTheDocument();
        });
    });

    // Scenario 2
    test('User can expand an event to see its details', ({
        given,
        when,
        then,
    }) => {
        given('the user gets a list of events', async () => {
            render(<App />);

            await waitFor(() => {
                const eventList = screen.getAllByRole('listitem');
                expect(eventList[0]).toBeTruthy();
            });
        });

        when("a user selects an event's details", async () => {
            const button = screen.getAllByText('Show Details')[0];
            await userEvent.click(button);
        });

        then('the details will show up for that chosen event', () => {
            const details = screen.getByText('Event Details');
            expect(details).toBeInTheDocument();
        });
    });

    // Scenario 3
    test('User can collapse an event to hide its details', ({
        given,
        when,
        then,
    }) => {
        let button;
        given('the user sees the details of an event', async () => {
            render(<App />);

            await waitFor(() => {
                const eventList = screen.getAllByRole('listitem');
                expect(eventList[0]).toBeTruthy();
            });

            button = screen.getAllByText('Show Details')[0];
            await userEvent.click(button);

            const details = screen.getByText('Event Details');
            expect(details).toBeInTheDocument();
        });

        when("the user presses a button to hide event's details", async () => {
            const hideButton = screen.getByText('Hide Details');
            await userEvent.click(hideButton);
        });

        then('the details of that event will be hidden', () => {
            const details = screen.queryByText('Event Details');
            expect(details).not.toBeInTheDocument();
        });
    });
});
