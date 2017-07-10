/**
 * Created by Luteh on 22/06/2017.
 */
import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {InputNB, ButtonRNE, Footer, RegisterText} from './common'

class ForgotPasswordScreen extends Component {
    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#C62828',
        },
        headerTitleStyle: {
            color: 'white'
        },
        headerBackTitleStyle: {
            color: 'white'
        },
    };

    redirect(route) {
        this.props.navigation.navigate(route)
    }
    back(){
        this.props.navigation.goBack()
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <View style={{flex: 4, alignItems: 'center', justifyContent: 'space-between'}}>
                    <InputNB>
                        Email
                    </InputNB>
                    <ButtonRNE
                        title="Reset Password"
                        onPress={this.redirect.bind(this, 'NewPasswordScreen')}
                    />
                    <Text
                        style={{color: 'red', fontWeight: 'bold'}}
                        onPress={this.back.bind(this)}
                    >
                        KEMBALI KE HALAMAN LOGIN
                    </Text>
                </View>
                <View style={{flex: 6}}>

                </View>
                <RegisterText
                    onPress={this.redirect.bind(this, 'registerScreen')}
                />
                <View style={{marginBottom:32}}>
                    <Footer/>
                </View>
            </View>
        )
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'space-around',
        padding: 20
    },
};

export {ForgotPasswordScreen}