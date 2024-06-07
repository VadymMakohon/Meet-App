# Meet-App

Meet App is a progressive web application (PWA) built with React that allows users to fetch and view upcoming events from their Google Calendar. This app uses a test-driven development (TDD) technique to ensure high-quality code and focuses on delivering a seamless user experience with key features such as filtering events by city, showing/hiding event details, specifying the number of events, offline usage, and displaying charts to visualize event details.

## Key Features

- Filter Events by City: Users can filter events based on the city to view events happening in their desired location.
- Show/Hide Event Details: Users can click on an event to show or hide its details for a cleaner and more organized view.
- Specify Number of Events: Users can specify the number of events they want to view at a time.
- Use the App When Offline: The app supports offline usage, allowing users to access previously fetched events without an internet connection.
- Add an App Shortcut to the Home Screen: Users can add a shortcut to the app on their home screen for quick access.
- Display Charts Visualizing Event Details: The app provides visual representations of event details using charts.

## User's Scenarios

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


## Technical Requirements

- The app is a React application.
- The app is built using the TDD technique.
- The app uses the Google Calendar API and OAuth2 authentication flow.
- The app uses serverless functions (AWS Lambda is preferred) for the authorization server instead of using a traditional server.
- The app’s code is hosted in a Git repository on GitHub.
- The app works on the latest versions of Chrome, Firefox, Safari, Edge, and Opera, as well as on IE11.
- The app displays well on all screen sizes (including mobile and tablet) widths of 1920px and 320px.
- The app should pass Lighthouse’s PWA checklist.
- The app works offline or in slow network conditions with the help of a service worker.
- Users maybe able to install the app on desktop and add the app to their home screen on mobile.

## Prerequisites

- Node.js and npm installed on your machine.
- A Google Cloud project with the Google Calendar API enabled.
- AWS account for setting up Lambda functions

# Contributors
- [Vadym Makohon](https://github.com/VadymMakohon)
