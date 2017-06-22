/**
 * Created by Luteh on 22/06/2017.
 */
import React, {Component} from 'react'
import {
    View,
    Text
} from 'react-native'
import {InputNB, ButtonRNE} from './common'

class LoginScreen extends Component {
    redirect(route) {
        this.props.navigation.navigate(route)
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
                    onPress={this.redirect.bind(this, 'RegisterScreen')}
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