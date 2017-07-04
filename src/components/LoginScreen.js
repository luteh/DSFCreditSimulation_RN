/**
 * Created by Luteh on 22/06/2017.
 */
import React, {Component} from "react";
import {Text, View, AsyncStorage} from "react-native";
import {ButtonRNE, InputNB} from "./common";
import axios from "axios";

class LoginScreen extends Component {

    componentWillMount() {
        AsyncStorage.clear();
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
            this.redirect('profileScreen');
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <View style={styles.containerStyle}>
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
                    style={{alignSelf: 'flex-start', marginTop: 8}}
                    onPress={this.redirect.bind(this, 'ForgotPasswordScreen')}>
                    Forgot Password
                </Text>
                <Text style={{marginTop: 50}}>
                    Belum punya akun?
                </Text>
                <Text>
                    Register disini
                </Text>
            </View>
        )
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 50
    }
};

export {LoginScreen}