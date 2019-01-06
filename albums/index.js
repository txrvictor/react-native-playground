
// Import a library to create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header'; // importing js file do not need .js
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => (
	<View>
		<Header headerText={'Albums'} />
		<AlbumList />
	</View>
);

// Render it into the device (must have the project's name)
// Must render the first component of our application
AppRegistry.registerComponent('albums', () => App);
