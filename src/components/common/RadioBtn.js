/**
 * Created by Luteh on 06/07/2017.
 */
import React, {Component} from 'react'
import {View, Text} from 'react-native'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

const radio_props = [
    {label: 'Ya', value: 0 },
    {label: 'Tidak', value: 1 }
];

class RadioBtn extends  Component{
    state={
        value: 0,
    };
    render(){
        return(
            <View>
                <Text>
                    {this.props.text}
                </Text>
                <RadioForm
                    radio_props={radio_props}
                    initial={0}
                    formHorizontal={true}
                    labelHorizontal={true}
                    buttonColor={'#2196f3'}
                    animation={true}
                    onPress={(value) => {this.setState({value:value})}}
                />
            </View>
        )
    }
}

export {RadioBtn}