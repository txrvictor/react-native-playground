import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
    state = { email: "", password: "", error: "", loading: false };

    onButtonPress() {
        const { email, password } = this.state;

         // cleans error and show loading
        this.setState({ 
            error: "",
            loading: true
        });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSucess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSucess.bind(this))
                    .catch(this.onLoginFail.bind(this));
            });
    }

    onLoginSucess() {
        this.setState({
            error: "",
            loading: false,
            email: "",
            password: ""
        });
    }

    onLoginFail() {
        this.setState({ 
            error: "Authentication failed",
            loading: false,
            password: ""
        });
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size="small" />;
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Log in
            </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        placeholder="user@gmail.com"
                        label="Email"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        secureTextEntry
                        placeholder="password"
                        label="Password" 
                        value={this.state.password}
                        onChangeText={pwd => this.setState({ password: pwd })}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default LoginForm;