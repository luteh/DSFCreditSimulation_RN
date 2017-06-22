/**
 * Created by Luteh on 22/06/2017.
 */
import React, {Component} from 'react'
import {
    View,
    Text
} from 'react-native'
import {Input, ButtonRNE} from './common'

class LoginScreen extends Component {
    redirect(route){
        this.props.navigation.navigate(route)
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <Input>
                    Email
                </Input>
                <Input secureTextEntry>
                    Password
                </Input>
                <ButtonRNE title="Login"
                onPress={this.redirect.bind(this, 'RegisterScreen')}
                />
                <Text style={{alignSelf: 'flex-start'}}>
                    Forgot Password
                </Text>
                <Text>
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
        marginRight: 15,
        marginLeft: 15,
        marginTop: 50
    }
};

export {LoginScreen}