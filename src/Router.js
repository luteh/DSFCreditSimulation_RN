/**
 * Created by Luteh on 22/06/2017.
 */
import {StackNavigator} from 'react-navigation'
import {
    LoginScreen,
    RegistrationScreen,
} from './components'

export const Root = StackNavigator({
    LoginScreen: {
        screen: LoginScreen,
        navigationOptions:{
            title:'Login'
        }
    },
    RegisterScreen:{
        screen: RegistrationScreen,
        navigationOptions:{
            title:'Register'
        }
    },
});