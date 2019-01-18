import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from '@firebase/app';
import reducers from './reducers';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyBxzkSZ17bTGjHtzGQYS_miKRjy10C7eig",
            authDomain: "manager-54f2d.firebaseapp.com",
            databaseURL: "https://manager-54f2d.firebaseio.com",
            projectId: "manager-54f2d",
            storageBucket: "manager-54f2d.appspot.com",
            messagingSenderId: "585089374993"
        };

        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>
                        Test
                    </Text>
                </View>
            </Provider>
        );
    }
}

export default App;
