/**
 * Created by Luteh on 22/06/2017.
 */
import React, {Component} from "react";
import {Text, View, AsyncStorage, Image, Button, ActivityIndicator} from "react-native";
import {ButtonRNE, InputNB, Footer, RegisterText} from "./common";
import axios from "axios";
import renderIf from '../renderIf'

class LoginScreen extends Component {

    state = {
        loginVisible: true,
        progressBar: false
    };

    componentWillMount() {
        /*setTimeout(() => {
         this.redirect('splashScreen')
         }, 1000);*/
        AsyncStorage.clear();
        console.ignoredYellowBox = [
            'Unable to symbolicate',
            'source.uri',
            'Possible Unhandled Promise'
        ];
    }

    redirect(route) {
        this.props.navigation.navigate(route)
    }

    async handleLogin() {
        try {
            this.setState({loginVisible: false, progressBar: true});
            let {data} = await axios.post('https://private-e6972-dsfcredit.apiary-mock.com/v1/auth/signin');
            const {full_name, phone_number, dealer_address, email, avatar} = data.user;

            let temporaryData = {full_name, phone_number, dealer_address, email, avatar};
            await AsyncStorage.setItem('user', JSON.stringify(temporaryData));
            this.setState({progressBar: false});
            await this.redirect('drawerNavigation');
            // this.setState({loginVisible: true});
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        const {containerStyle, contentStyle, backgroundImageStyle, logoImageStyle, activityIndicatorStyle} = styles;
        return (
            <Image
                style={backgroundImageStyle}
                source={require('../../imgs/bg_login.png')}
            >
                {renderIf(this.state.loginVisible)(
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
                                onPress={this.redirect.bind(this, 'drawerNavigation')}
                                // onPress={this.handleLogin.bind(this)}
                            />
                            <Text
                                style={{marginTop: 8}}
                                onPress={this.redirect.bind(this, 'ForgotPasswordScreen')}>
                                Lupa Password?
                            </Text>
                            <View style={{marginTop: 120}}>
                                <RegisterText
                                    onPress={this.redirect.bind(this, 'registerScreen')}
                                />
                            </View>
                        </View>
                        <View style={{marginBottom: 32}}>
                            <Footer/>
                        </View>
                    </View>
                )}
                {renderIf(this.state.progressBar)(
                    <View style={containerStyle}>
                        <ActivityIndicator
                            animating={this.state.progressBar}
                            color={'black'}
                            size="large"
                            style={activityIndicatorStyle}
                        />
                    </View>
                )}
            </Image>
        )
    }
}

const styles = {
    containerStyle: {
        flex: 1
    },
    contentStyle: {
        flex: 1,
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
    },
    activityIndicatorStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export {LoginScreen}