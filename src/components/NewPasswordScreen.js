/**
 * Created by Luteh on 22/06/2017.
 */
import React, {Component} from 'react'
import {View} from 'react-native'
import {InputNB, ButtonRNE} from './common'
import styles from './styles/Styles'

class NewPasswordScreen extends Component {
    render() {
        return (
            <View style={styles.containerStyle}>
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
        )
    }
}

export {NewPasswordScreen}