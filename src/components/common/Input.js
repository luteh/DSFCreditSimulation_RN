/**
 * Created by Luteh on 22/06/2017.
 */
import React from 'react'
import {View} from 'react-native'
import {FormInput, FormLabel, FormValidationMessage} from 'react-native-elements'

const Input = ({children, secureTextEntry, keyboardType, returnKeyType}) => {
    return (
        <View style={styles.containerStyle}>
            <FormLabel labelStyle={{alignSelf: 'flex-start', fontSize:10}}>
                {children}
            </FormLabel>
            <FormInput
                containerStyle={{
                    alignSelf: 'center',
                }}
                inputStyle={{
                    backgroundColor: '#F5F5F5',
                    borderRadius: 5,
                    color: 'black',

                }}
                keyboardType={keyboardType}
                returnKeyType={returnKeyType}
                secureTextEntry={secureTextEntry}
                placeholder={`${children}`}
                onChangeText={(text) => console.log(text)}
            />
        </View>
    )
};

const styles = {
    containerStyle: {
        flex: 1,
        marginBottom: 5
    }
};

export {Input}