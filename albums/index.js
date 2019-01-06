
// Import a library to create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header'; // importing js file do not need .js

// Create a component
const App = () => (
	<Header headerText={'Albums'} />
);

// Render it into the device (must have the project's name)
// Must render the first component of our application
AppRegistry.registerComponent('albums', () => App);
