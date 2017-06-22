/**
 * Created by Luteh on 22/06/2017.
 */
import React from 'react'
import {View} from 'react-native'
import {FormInput, FormLabel, FormValidationMessage} from 'react-native-elements'

const Input = ({children, secureTextEntry}) => {
    return (
        <View style={styles.containerStyle}>
            <FormLabel>
                {children}
            </FormLabel>
            <FormInput
                secureTextEntry={secureTextEntry}
                placeholder={`Please enter your ${children}`}
                onChangeText={(text) => console.log(text)}
            />
        </View>
    )
};

const styles = {
    containerStyle:{
        marginTop: 8
    }
};

export {Input}