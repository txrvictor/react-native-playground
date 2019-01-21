import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from '@firebase/app';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

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
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        
        return (
            <Provider store={store}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;
