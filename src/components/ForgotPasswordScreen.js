/**
 * Created by Luteh on 22/06/2017.
 */
import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {InputNB, ButtonRNE} from './common'
import styles from './styles/Styles'

class ForgotPasswordScreen extends Component {
    redirect(route) {
        this.props.navigation.navigate(route)
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <InputNB>
                    Email
                </InputNB>
                <ButtonRNE
                    title="Reset Password"
                    onPress={this.redirect.bind(this, 'NewPasswordScreen')}
                />
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                    <Text style={styless.textStyle}>Register</Text>
                    <Text style={{flex: 4}}> </Text>
                    <Text style={[styless.textStyle, {left: 10}]}>Login</Text>
                </View>
            </View>
        )
    }
}

const styless = {
    textStyle: {
        flex: 1,
        alignSelf: 'flex-end'
    }
};

export {ForgotPasswordScreen}