/**
 * Created by Luteh on 22/06/2017.
 */
import React, {Component} from 'react'
import {View} from 'react-native'
import {InputNB} from './common'

class RegistrationScreen extends Component {
    render() {
        return (
            <View style={styles.containerStyle}>
                <InputNB>
                    Nama Lengkap *
                </InputNB>
                <InputNB>
                    No. Handphone *
                </InputNB>
                <InputNB>
                    No. KTP
                </InputNB>
                <InputNB>
                    Email *
                </InputNB>
                <InputNB>
                    Password *
                </InputNB>
                <InputNB>
                    Ulangi Password *
                </InputNB>
            </View>
        )
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        paddingRight: 15,
        paddingLeft: 15
    }
};

export {RegistrationScreen}