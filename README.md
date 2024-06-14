# Meet-App

Meet App is a PWA built with React that lets users view upcoming Google Calendar events. It uses TDD for high-quality code and offers features like city-based event filtering, event detail toggling, customizable event count, offline access, and event detail visualizations.

![App interface](https://github.com/VadymMakohon/Meet-App/assets/138728243/1ce04e6d-f72c-4572-84ba-2ad46cb0cf74)

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation

1. Clone the repository.
2. Navigate to the project directory in the terminal.
3. Run `npm install` to install the necessary dependencies.

## Technologies Used

- React
- Jest
- React testing library
- Puppeteer

## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:3000/meet_app`. The application will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Deployment

Run `npm run deploy` to deploy to github pages

## Meet App and their user stories and features

### Feature 1: Filter Events by City
SCENARIO 1: Show events from all cities when no city is specified

Given user hasn’t searched for any city;
When the user opens the app;
Then the user should see a list of upcoming events from all cities.

SCENARIO 2: Display city suggestions during search

Given the main page is open;
When user starts typing in the city textbox;
Then the user should receive a list of cities (suggestions) that match what they’ve typed.

SCENARIO 3: Filter events by selected city

Given user was typing “Bergen” in the city textbox AND the list of suggested cities is showing;
When the user selects a city (e.g., “Bergen, Norway”) from the list;
Then their city should be changed to that city (i.e., “Bergen, Norway”) AND the user should receive a list of upcoming events in that city.

### Feature 2: Show/Hide Event Details
SCENARIO 1: Show event details

Given the user is viewing a list of events;
When the user clicks on an event's "Show Details" button;
Then the detailed information for that event should be displayed.

SCENARIO 2: Hide event details

Given the user is viewing the detailed information of an event;
When the user clicks on the event's "Hide Details" button;
Then the detailed information for that event should be hidden.

SCENARIO 3: Toggle event details repeatedly

Given the user is viewing a list of events;
When the user clicks on an event's "Show Details" button and then clicks the "Hide Details" button;
Then the event's details should be shown and then hidden accordingly.

### Feature 3: Specify Number of Events
SCENARIO 1: Default number of events displayed

Given the user has not specified the number of events to display;
When the user opens the app;
Then a default number of events (e.g., 10) should be displayed.

SCENARIO 2: User changes the number of events displayed

Given the user is viewing the list of events;
When the user selects a different number (e.g., 20) from the "Number of events per page" dropdown;
Then the specified number of events (e.g., 20) should be displayed on the page.

SCENARIO 3: Invalid number of events inputs

Given the user is viewing the list of events;
When the user enters an invalid number (e.g., "abc") in the "Number of events per page" input;
Then the app should show an error message and prompt the user to enter a valid number.

### Feature 4: Use the App When Offline
SCENARIO 1: Access cached events when offline

Given the user is offline;
When the user opens the app;
Then the user should see a list of previously cached events.

SCENARIO 2: No new events can be fetched offline

Given the user is offline;
When the user tries to refresh the events list;
Then the app should show an error message indicating that new events cannot be fetched without an internet connection.

SCENARIO 3: Offline mode notification

Given the user is offline;
When the user opens the app;
Then the app should display a notification indicating it is in offline mode.

### Feature 5: Add an App Shortcut to the Home Screen
SCENARIO 1: Prompt to add a shortcut

Given the user is using the app in a compatible browser;
When the user navigates to the main page;
Then the app should display a prompt to add the app shortcut to the home screen.

SCENARIO 2: Successful shortcut addition

Given the user has accepted the prompt to add a shortcut;
When the user confirms the action;
Then the app shortcut should be added to the user's home screen.

SCENARIO 3: Shortcut addition declined

Given the user has declined the prompt to add a shortcut;
When the user dismisses the prompt;
Then the app should not show the prompt again for a set period (e.g., 1 week).

### Feature 6: Display Charts Visualizing Event Details
SCENARIO 1: Display default charts for events

Given the user is viewing event details;
When the user opens an event's detailed page;
Then the user should see default charts visualizing various aspects of the event (e.g., attendance, demographics).

SCENARIO 2: Toggle chart views

Given the user is viewing charts on an event's detail page;
When the user clicks on a chart toggle option (e.g., switch from bar chart to pie chart);
Then the chart should update to the selected view.

SCENARIO 3: No data available for charts

Given the user is viewing an event's details;
When there is no data available for visualization;
Then the app should display a message indicating that no data is available for the charts.

## Serverless Functions

Meet App uses serverless functions to handle backend processes efficiently, providing scalability and reliability. Here’s a brief overview of their roles in the application:

- Event Data Retrieval: Serverless functions fetch event data from an external API when users request to see events by city or category, ensuring data is always up-to-date.
- User Authentication: These functions manage login and registration securely, allowing scalable user session management.
- Real-Time Updates: Functions handle updates and notifications, ensuring users receive the latest event information instantly.
- Data Processing: Tasks like filtering or sorting events based on user preferences are offloaded to serverless functions, enhancing client-side performance and user experience.

# Contributors
- [Vadym Makohon](https://github.com/VadymMakohon)
