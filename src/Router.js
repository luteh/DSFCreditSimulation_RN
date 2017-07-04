/**
 * Created by Luteh on 22/06/2017.
 */
import {StackNavigator} from 'react-navigation'
import {
    LoginScreen,
    RegistrationScreen,
    ForgotPasswordScreen,
    NewPasswordScreen,
    ProfileScreen
} from './components'

export const Root = StackNavigator({
    LoginScreen: {
        screen: LoginScreen,
        navigationOptions: {
            title: 'Login'
        }
    },
    profileScreen: {
        screen: ProfileScreen,
        navigationOptions: {
            title: 'Profile'
        }
    },
    RegisterScreen: {
        screen: RegistrationScreen,
        navigationOptions: {
            title: 'Register'
        }
    },
    ForgotPasswordScreen: {
        screen: ForgotPasswordScreen,
        navigationOptions: {
            title: 'Forgot Password'
        }
    },
    NewPasswordScreen: {
        screen: NewPasswordScreen,
        navigationOptions: {
            title: 'New Password'
        }
    },
});