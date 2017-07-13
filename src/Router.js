/**
 * Created by Luteh on 22/06/2017.
 */
import React from 'react';
import {Image, TouchableHighlight} from 'react-native';
import {StackNavigator, DrawerNavigator} from 'react-navigation'
import {
    LoginScreen,
    RegistrationScreen,
    ForgotPasswordScreen,
    NewPasswordScreen,
    ProfileScreen,
    CreditSimulationScreen,
    ResultScreen,
    SplashScreen
} from './components'

export const Drawer = DrawerNavigator({
        creditSimulationScreen: {
            screen: CreditSimulationScreen,
            navigationOptions: {
                title: 'Simulasi Kredit',
                drawerIcon: ({tintColor}) => (
                    <Image
                        source={require('../imgs/icon-simulasi-kredit.png')}
                        style={[styles.tabIcon, {tintColor: 'red'}]}
                    />
                ),
            }
        },
        profileScreen: {
            screen: ProfileScreen,
            navigationOptions: {
                title: 'Profil',
                drawerIcon: ({tintColor}) => (
                    <Image
                        source={require('../imgs/icon-profil.png')}
                        style={[styles.tabIcon, {tintColor: 'red'}]}
                    />
                ),
            }
        },
    },
    {
        initialRouteName: 'profileScreen',
        headerMode: 'none',
        drawerPosition: 'right'
    });

export const Root = StackNavigator({
        LoginScreen: {
            screen: LoginScreen,
            navigationOptions: {
                header: null
            }
        },
        splashScreen: {
            screen: SplashScreen,
            navigationOptions: {
                header: null
            }
        },
        drawerNavigation: {
            screen: Drawer,
            navigationOptions: {
                headerStyle: {
                    backgroundColor: '#C62828',
                },
                headerBackTitleStyle: {
                    color: 'white'
                },

            },
        },
        registerScreen: {
            screen: RegistrationScreen,
            navigationOptions: {
                title: 'Register'
            }
        },
        ForgotPasswordScreen: {
            screen: ForgotPasswordScreen,
            navigationOptions: {
                title: 'Forgot Password',
            }
        },
        NewPasswordScreen: {
            screen: NewPasswordScreen,
            navigationOptions: {
                title: 'New Password'
            }
        },
        resultScreen: {
            screen: ResultScreen,
            navigationOptions: {
                title: 'Hasil Simulasi Kredit'
            }
        },
    },
    {
        mode: 'modal'
    });

const styles = {
    tabIcon: {
        width: 16,
        height: 16,
    }
};