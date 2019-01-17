import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyA6lrmMMRIeyHYKNKhIZLyIxQJ2gcAC3z0',
            authDomain: 'authentication-2694e.firebaseapp.com',
            databaseURL: 'https://authentication-2694e.firebaseio.com',
            projectId: 'authentication-2694e',
            storageBucket: 'authentication-2694e.appspot.com',
            messagingSenderId: "31473606627"
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;
