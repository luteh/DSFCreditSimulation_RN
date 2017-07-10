/**
 * Created by Luteh on 22/06/2017.
 */
import React, {Component} from "react";
import {Text, View, AsyncStorage, Image, Button} from "react-native";
import {ButtonRNE, InputNB, Footer, RegisterText} from "./common";
import axios from "axios";

class LoginScreen extends Component {

    componentWillMount() {
        /*setTimeout(() => {
         this.redirect('splashScreen')
         }, 1000);*/
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
        const {containerStyle, contentStyle, backgroundImageStyle, logoImageStyle} = styles;
        return (
            <Image
                style={backgroundImageStyle}
                source={require('../../imgs/bg_login.png')}
            >
                <View style={containerStyle}>
                    <View style={contentStyle}>
                        <Image
                            style={logoImageStyle}
                            source={require('../../imgs/lia-logo.png')}
                        />
                        <InputNB>
                            Email
                        </InputNB>
                        <InputNB secureTextEntry>
                            Password
                        </InputNB>
                        <ButtonRNE
                            title="Login"
                            // onPress={this.redirect.bind(this, 'profileScreen')}
                            onPress={this.redirect.bind(this, 'drawerNavigation')}
                        />
                        <Text
                            style={{marginTop: 8}}
                            onPress={this.redirect.bind(this, 'ForgotPasswordScreen')}>
                            Lupa Password?
                        </Text>
                        <View style={{marginTop:120}}>
                            <RegisterText
                                onPress={this.redirect.bind(this, 'registerScreen')}
                            />
                        </View>
                    </View>

                    <View style={{marginBottom: 32}}>
                        <Footer/>
                    </View>
                </View>
            </Image>
        )
    }
}

const styles = {
    containerStyle: {
        flex: 1
    },
    contentStyle: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    backgroundImageStyle: {
        flex: 1,
        height: null,
        width: null,
        resizeMode: 'stretch'
    },
    logoImageStyle: {
        height: 100,
        width: 100,
        resizeMode: 'stretch'
    }
};

export {LoginScreen}