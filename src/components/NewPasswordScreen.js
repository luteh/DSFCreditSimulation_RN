/**
 * Created by Luteh on 22/06/2017.
 */
import React, {Component} from 'react'
import {View} from 'react-native'
import {InputNB, ButtonRNE} from './common'
import styles from './styles/Styles'

class NewPasswordScreen extends Component {
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

    render() {
        return (
            <View style={styles.containerStyle}>
                <View style={{flex: 4}}>
                    <InputNB>
                        New Password
                    </InputNB>
                    <InputNB>
                        Confirm Password
                    </InputNB>
                    <ButtonRNE
                        title="Confirm"
                        onPress={() => console.log('Confirm Pressed!')}
                    />
                </View>
                <View style={{flex: 7}}>

                </View>
            </View>
        )
    }
}

export {NewPasswordScreen}