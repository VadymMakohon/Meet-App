# Meet-App

Meet App is a progressive web application (PWA) built with React that allows users to fetch and view upcoming events from their Google Calendar. This app uses a test-driven development (TDD) technique to ensure high-quality code and focuses on delivering a seamless user experience with key features such as filtering events by city, showing/hiding event details, specifying the number of events, offline usage, and displaying charts to visualize event details.

## Key Features

- Filter Events by City: Users can filter events based on the city to view events happening in their desired location.
- Show/Hide Event Details: Users can click on an event to show or hide its details for a cleaner and more organized view.
- Specify Number of Events: Users can specify the number of events they want to view at a time.
- Use the App When Offline: The app supports offline usage, allowing users to access previously fetched events without an internet connection.
- Add an App Shortcut to the Home Screen: Users can add a shortcut to the app on their home screen for quick access.
- Display Charts Visualizing Event Details: The app provides visual representations of event details using charts.

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
