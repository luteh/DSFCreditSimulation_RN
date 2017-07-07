/**
 * Created by Luteh on 22/06/2017.
 */
import React, {Component} from "react";
import {Text, View, AsyncStorage, Image, Button} from "react-native";
import {ButtonRNE, InputNB, Footer, RegisterText} from "./common";
import axios from "axios";

class LoginScreen extends Component {

    componentWillMount() {
        AsyncStorage.clear();
        console.ignoredYellowBox = [
            'Unable to symbolicate',
            'source.uri'
        ];
    }

    redirect(route) {
        this.props.navigation.navigate(route)
    }

    async handleLogin() {
        try {
            let {data} = await axios.post('https://private-e6972-dsfcredit.apiary-mock.com/v1/auth/signin');
            const {full_name, phone_number, dealer_address, email, avatar} = data.user;

            let temporaryData = {full_name, phone_number, dealer_address, email, avatar};
            AsyncStorage.setItem('user', JSON.stringify(temporaryData));
            this.redirect('drawerNavigation');
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <View style={{flex: 10, alignItems: 'center'}}>
                    <InputNB>
                        Email
                    </InputNB>
                    <InputNB secureTextEntry>
                        Password
                    </InputNB>
                    <ButtonRNE
                    title="Login"
                    // onPress={this.redirect.bind(this, 'profileScreen')}
                    onPress={this.handleLogin.bind(this)}
                    />
                    <Text
                        style={{marginTop: 8}}
                        onPress={this.redirect.bind(this, 'ForgotPasswordScreen')}>
                        Lupa Password?
                    </Text>
                </View>

                <RegisterText
                    onPress={this.redirect.bind(this, 'registerScreen')}
                />

                <View style={{flex: 1}}>
                    <Footer/>
                </View>
            </View>
        )
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        alignItems: 'center',
        backgroundColor:'white',
        justifyContent: 'space-around',
        padding: 20
    },
};

export {LoginScreen}