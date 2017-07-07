/**
 * Created by Luteh on 22/06/2017.
 */
import React from 'react';
import {Image} from 'react-native';
import {StackNavigator, DrawerNavigator} from 'react-navigation'
import {
    LoginScreen,
    RegistrationScreen,
    ForgotPasswordScreen,
    NewPasswordScreen,
    ProfileScreen,
    CreditSimulationScreen
} from './components'

export const Drawer = DrawerNavigator({
        profileScreen: {
            screen: ProfileScreen,
            navigationOptions: {
                title: 'Profil',
                drawer: {
                    icon: () => (
                        <Image
                            source={require('../imgs/home.png')}
                            style={[styles.tabIcon, {tintColor: 'black'}]}
                        />
                    ),
                }
            }
        },
        creditSimulationScreen: {
            screen: CreditSimulationScreen,
            navigationOptions: {
                title: 'Simulasi Kredit',
                drawer: {
                    icon: () => (
                        <Image
                            source={require('../imgs/tablet.png')}
                            style={[styles.tabIcon, {tintColor: 'black'}]}
                        />
                    )
                }
            }
        }
    },
    {
        drawerPosition: 'right'
    });

export const Root = StackNavigator({
        LoginScreen: {
            screen: LoginScreen,
            navigationOptions: {
                header: null
            }
        },
        // profileScreen: {
        //     screen: ProfileScreen,
        //     navigationOptions: {
        //         title: 'Profile'
        //     }
        // },
        drawerNavigation: {
            screen: Drawer,
            navigationOptions: {
                headerStyle: {
                    backgroundColor: '#C62828',
                },
                headerBackTitleStyle: {
                    color: 'white'
                },
            }
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